import { useState, useCallback, useEffect, useRef } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import RemainTimeItem from '@components/RemainTimeItem';
import { minuteConverter, secondConverter } from '@lib/timeConverter';
import PlusMinusButton from '@components/PlusMinusButton';
import ControlButton from '@components/ControlButton';

import { FiPlay, FiStopCircle, FiRotateCcw } from 'react-icons/fi';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const Home: NextPage = () => {
  const [remainTime, setRemainTime] = useState<number>(0);
  const [isTimeUp, setTimeUp] = useState<boolean>(false);
  const intervalRef: any = useRef(null);

  //残り時間の監視
  useEffect(() => {
    if (remainTime <= 0) {
      clearInterval(intervalRef.current);
      setRemainTime(0);
      intervalRef.current !== null && setTimeUp(true);
      intervalRef.current = null;
    }
  }, [remainTime, isTimeUp]);

  const MINUTE_TO_SECONDS = 60;
  const SECOND = 1;

  //ボタン操作
  const plusMinute = () => {
    setRemainTime(remainTime + MINUTE_TO_SECONDS);
  };
  const minusMinute = () => {
    setRemainTime(remainTime - MINUTE_TO_SECONDS);
  };
  const plusSecond = () => {
    setRemainTime(remainTime + SECOND);
  };
  const minusSecond = () => {
    setRemainTime(remainTime - SECOND);
  };

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setRemainTime((r) => r - 1);
    }, 1000);
  }, [remainTime, isTimeUp]);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const reset = useCallback(() => {
    setRemainTime(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeUp(false);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>SimpleCountDownTimer</title>
        <meta
          name="description"
          content="Next.jsで作成したカウントダウンタイマー"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mb-2 p-2 bg-sky-700 text-white">
        <h1 className="text-2xl">Simple CountDown Timer</h1>
      </header>

      <main>
        <div className="max-w-sm mx-auto">
          <div className="grid grid-cols-5 my-4">
            <RemainTimeItem
              remainTimeString={minuteConverter(remainTime)}
              button={
                <>
                  <PlusMinusButton plus={true} onClick={plusMinute} />
                  <PlusMinusButton plus={false} onClick={minusMinute} />
                </>
              }
            />
            <div className="text-center grid grid-rows-2 items-center">
              <span className="text-2xl md:text-4xl font-bold">:</span>
            </div>
            <RemainTimeItem
              remainTimeString={secondConverter(remainTime)}
              button={
                <>
                  <PlusMinusButton plus={true} onClick={plusSecond} />
                  <PlusMinusButton plus={false} onClick={minusSecond} />
                </>
              }
            />
          </div>
          <div
            className="grid md:grid-cols-3 border border-gray-400 rounded
                          divide-y md:divide-y-0 md:divide-x divide-gray-400"
          >
            <ControlButton onClick={start} text="start" icon={<FiPlay />} />
            <ControlButton onClick={stop} text="stop" icon={<FiStopCircle />} />
            <ControlButton
              onClick={reset}
              text="reset"
              icon={<FiRotateCcw />}
            />
          </div>
        </div>
      </main>
      <div
        className="min-w-screen min-h-screen bg-gray-800 bg-opacity-50 absolute inset-0"
        style={{ display: isTimeUp ? 'block' : 'none' }}
        onClick={() => setTimeUp(false)}
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md text-6xl text-red-600 font-bold">
            Time Up!
          </div>
        </div>
      </div>

      <footer className="bg-sky-700 text-white mt-auto p-2">
        <div className="flex space-x-2 text-xl">
          <FaTwitter />
          <FaGithub />
        </div>
      </footer>
    </div>
  );
};

export default Home;
