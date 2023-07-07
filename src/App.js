import React, { useState } from "react";
import "./css/main.css";
import moment from "moment";
import "moment/locale/ru";

function DateTime(props) {
  return <p className="date">{props.date}</p>;
}

const Data = (Component) => {
  function Date(props) {
    let now = moment();
    let end = moment(props.date);
    let minutes = now.diff(end, "minutes");
    let hours = now.diff(end, "hours");
    let days = now.diff(end, "days");
    let new_date = "";
    if (minutes < 60) {
      new_date = `${minutes} минут назад`;
    } else if (hours < 24) {
      new_date = `${hours} часов назад`;
    } else {
      new_date = `${days} дней назад`;
    }
    return <Component date={new_date} />;
  }
  return Date;
};

const DateTimePretty = Data(DateTime);

function Video(props) {
  return (
    <div className="video">
      <iframe
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
      <DateTimePretty date={props.date} />
    </div>
  );
}

function VideoList(props) {
  return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
      {
          url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2017-07-31 13:24:00'
      },
      {
          url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-03-03 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-02-03 23:16:00'
      },
      {
          url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-01-03 12:10:00'
      },
      {
          url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2018-01-01 16:17:00'
      },
      {
          url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
          date: '2017-12-02 05:24:00'
      },
  ]);

  return (
      <VideoList list={list} />
  );
}