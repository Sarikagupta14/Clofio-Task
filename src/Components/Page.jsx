import React from "react";
import "./Page.css";

const Page = () => {
  const data1 = [
    {
      name: "ACME CORP",
      budget: "$20,000",
      spend: "$173762",
      forecast: "$292,629",
    },
    {
      name: "Raman Inc",
      budget: "$20,000",
      spend: "$124,762",
      forecast: "$292,629",
    },
  ];
  const data2 = [
    {
      name: "ACME Corp",
      current: " $200,000",
      budget: "$250,762",
      by: "Joe Hilfinger",
    },
  ];

  const data3 = [
    {
      name: "Longate",
      budget: "$20,000",
      spend: "$173762",
      forecast: "$205.049",
    },
  ];
  return (
    <div w={"100%"}>
      <div className="container">
        {/* Left box */}
        <div className="sidebar">
          <div id="cloud">
            <img
              alt="img"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/3b88c857-d17e-48d8-bf2f-5fe59b97350f"
            />
          </div>

          <div id="cube">
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
            <img
              alt="cube"
              src="https://github.com/Sarikagupta14/Mini-Project/assets/121433831/9abb5aa8-ac6e-4294-ae25-67a3e2d78e6b"
            />
          </div>

          <div id="name">
            <p id="dk"> DK</p>
          </div>
        </div>

        {/* Right box */}
        {/* section-1 */}
        <div className="section1">
          <div className="header">
            <p id="heading">Hi,Jennie Moss</p>
            <p id="date">Last scanned on March 20th,2023 11:30PM IST</p>
          </div>

          {/* section-2 */}

          <div className="section2">
            <div id="box1">
              <p id="price">$400,000</p>
              <p id="description">Total budget you own</p>
            </div>
            <div id="box2">
              <p id="price">$299,762</p>
              <p id="description">Spent month-to-date</p>
            </div>
            <div id="box3">
              <p id="price">$2,874,582</p>
              <p id="description">Forecasted till month</p>
            </div>
          </div>

          {/* Section-3 */}
          <div className="section3">
            {/* First Box */}

            <div className="table">
              <div>
                {" "}
                <h1 id="heading">Buckets you own</h1>
              </div>
              <div id="line"></div>

              <div className="first">
                <table>
                  <tr id="sub">
                    <th id="s">Name</th>
                    <th id="sub-heading">Budget</th>
                    <th id="sub-heading">Spend</th>
                    <th id="sub-heading">Forecast</th>

                    <th id="empty"></th>
                  </tr>
                  {data1.map((val, key) => {
                    return (
                      <tr id="sub" key={key}>
                        <td id="details-1">{val.name}</td>
                        <td id="details">{val.budget}</td>
                        <td id="details">{val.spend}</td>
                        <td id="details">{val.forecast}</td>
                        <td id="empty"></td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>

            {/* Second Box */}
            <div className="table">
              <h1 id="heading">Approvals assigned to you</h1>

              <div id="line"></div>
              <div className="second">
                <table>
                  <tr id="sub">
                    <th id="s">Bucket name</th>
                    <th id="sub-heading">Current Budget</th>
                    <th id="sub-heading">Requested Budget</th>
                    <th id="sub-heading">Requested By</th>
                    <th id="sub-heading"></th>
                    <th id="sub-heading"></th>
                  </tr>
                  {data2.map((val, key) => {
                    return (
                      <tr id="sub" key={key}>
                        <td id="details-1">{val.name}</td>
                        <td id="details">{val.current}</td>
                        <td id="details">{val.budget}</td>
                        <td id="details-4">{val.by}</td>
                        <td id="details"></td>
                        <td id="det">
                          {" "}
                          <div id="but">
                            <button>Approve</button> <button>Reject</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </table>
                <div></div>
              </div>
            </div>

            {/* Third Box */}
            <div className="table">
              <div>
                {" "}
                <h1 id="heading">Buckets you are member of</h1>
              </div>
              <div id="line"></div>

              <div className="third">
                <table>
                  <tr id="sub">
                    <th id="s">Name</th>
                    <th id="sub-heading">Budget</th>
                    <th id="sub-heading">Spend</th>
                    <th id="sub-heading">Forecast</th>

                    <th id="empty"></th>
                  </tr>
                  {data3.map((val, key) => {
                    return (
                      <tr id="sub" key={key}>
                        <td id="details-1">{val.name}</td>
                        <td id="details">{val.budget}</td>
                        <td id="details">{val.spend}</td>
                        <td id="details">{val.forecast}</td>
                        <td id="empty"></td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
