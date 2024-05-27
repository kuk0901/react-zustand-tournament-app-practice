import { styled } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useUIRandomImageIndexStore } from "../stores/useUIRandomImageIndexStore";
import { useSelectedIndexStore } from "../stores/useSelectedIndexStore";
import { useResultIndexStore } from "../stores/useResultIndexStore";
import { useNavigate } from "react-router-dom";
import { useProgressBarStore } from "../stores/useProgressBarStore";

export interface ValueIndex {
  value: { first: number; last: number };
}

const ImageBox = (): JSX.Element => {
  // * 이미지 UI를 보여주기 위한 전체 randomIndex state
  const { randomIndex, setRandomIndex, mixIndex } =
    useUIRandomImageIndexStore();

  // * 선택된 이미지의 인덱스 번호를 모아두는 용도의 selectedIndex state
  const { selectedIndex, getSelectedIndex, clearSelectedIndex } =
    useSelectedIndexStore();

  // * 최종적으로 선택된 resultIndex를 얻기 위한 action
  const { setResultIndex } = useResultIndexStore();

  // * 진행도를 알기 위해 length를 저장할 action
  const { setBarLength, setBarValue } = useProgressBarStore();

  // * 전체 randomIndex state에서 UI에 사용할 인덱스 번호만 추출하기 위한 getter, setter
  const [valueIndex, setValueIndex] = useState<ValueIndex["value"]>({
    first: randomIndex.at(0),
    last: randomIndex.at(-1)
  });

  const [progressBarLength, setProgressBarLength] = useState<number>(
    randomIndex.length
  );

  const navigate = useNavigate();
  const { first, last } = valueIndex;

  const changeTupleIndex = useCallback(() => {
    setValueIndex({
      first: randomIndex.at(0),
      last: randomIndex.at(-1)
    });
    console.log("randomIndex", randomIndex);
    console.log("selectedIndex", selectedIndex);
  }, [randomIndex, selectedIndex]);

  const changeRandomIndex = () => {
    setRandomIndex([...randomIndex.slice(1, randomIndex.length - 1)]);
  };

  useEffect(() => {
    if (randomIndex.length === 0 && selectedIndex.length === 1) {
      setResultIndex([...selectedIndex]);
      navigate("/result");
      clearSelectedIndex();
    } else if (randomIndex.length === 0 && selectedIndex.length > 1) {
      setRandomIndex([...selectedIndex]);
      setProgressBarLength(selectedIndex.length);
      clearSelectedIndex();
      mixIndex();
    } else {
      changeTupleIndex();
      setBarLength(progressBarLength);
      setBarValue(selectedIndex.length);
    }
  }, [
    changeTupleIndex,
    clearSelectedIndex,
    mixIndex,
    setRandomIndex,
    setResultIndex,
    selectedIndex,
    randomIndex.length,
    navigate,
    setBarLength,
    setBarValue,
    progressBarLength
  ]);

  return (
    <>
      <Image
        key={`../../image/ex${first}`}
        sx={{ backgroundImage: `url("../../image/ex${first}.png")` }}
        onClick={() => {
          changeRandomIndex();
          changeTupleIndex();
          getSelectedIndex([...selectedIndex, first]);
        }}
      />
      <Image
        key={`../../image/ex${last}`}
        sx={{ backgroundImage: `url("../../image/ex${last}.png")` }}
        onClick={() => {
          changeRandomIndex();
          changeTupleIndex();
          getSelectedIndex([...selectedIndex, last]);
        }}
      />
    </>
  );
};

export default ImageBox;

const Image = styled("div")(({ theme }) => ({
  width: "450px",
  height: "550px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform .2s",
  ":hover": {
    zIndex: 3,
    border: `2px solid ${theme.palette.primary.main}`,
    transform: "scale(1.07)"
  },
  [theme.breakpoints.down("lg")]: {
    width: "300px",
    height: "500px"
  },
  [theme.breakpoints.down("md")]: {
    width: "260px",
    height: "460px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "220px",
    height: "420px"
  }
}));
