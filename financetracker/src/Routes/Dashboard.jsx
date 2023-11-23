import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTxns() {
    await axios
      .get("http://localhost:2000/transaction/view")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    getTxns();
  });

  console.log(data);

  return (
    <div className="relative left-[0px] top-[0px] bg-white w-[1440px] h-[1024px]">
      <div className=" w-[438px] h-[944px] absolute left-[1002px]">
        <div className="absolute left-[0px] top-[0px] bg-[#d7d7f5] border-1 rounded-[50px] w-[438px] h-[944px]"></div>
        <div className="absolute left-[70px] top-[704px] bg-black border-1 rounded-[17.08px] w-[298px] h-[137px]"></div>
        <div className="absolute left-[70px] top-[513px] bg-[#181823] bg-opacity-50 border-1 rounded-[17.08px] w-[298.08px] h-[148.61px]"></div>
        <div className=" w-[92px] h-[92px] absolute left-[266px] top-[540px]"></div>
        <p className="w-[185px] h-[68px] absolute left-20 top-[562px] text-[18.76px] font-medium tracking-[0.47px] text-[#bdbdbd]">
          GOAL 2023
        </p>
        <p className="w-[145px] h-[34px] absolute left-20 top-[583px] text-[26.57px] font-bold tracking-[0.66px] text-white">
          Completed
        </p>
        <p className="w-[29px] h-[19px] absolute left-[276px] top-[556px] text-[15px] font-bold text-white">
          75%
        </p>
        <p className="w-[191px] h-[31px] absolute left-9 top-[54px] text-2xl font-bold">
          Wallet Statistics
        </p>
        <p className="w-[145px] h-14 absolute left-[146px] top-[441px] text-[44.10px] font-semibold text-[#181823]">
          ₹10000
        </p>
        <p className="w-9 h-[17px] absolute left-[329px] top-[61px] text-[13.59px] font-bold text-[#676775]">
          Week
        </p>
        <p className="w-[196px] h-[39px] absolute left-[121px] top-[402px] text-[30.19px] font-bold text-[#676775]">
          Saved Money
        </p>
        <div className=" w-[368.24px] h-[215.87px] absolute left-9 top-[135px]">
          <div className=" w-[326.85px] h-[23px] absolute left-[21.82px] top-[192.87px]">
            <p className="w-8 h-[15px] absolute left-0 top-1 text-xs font-bold text-[#181823]">
              Oct 9
            </p>
            <div className="absolute left-[112.18px] top-[0px] bg-[#c2c2e7] border-1 rounded-full w-[42px] h-[23px]"></div>
            <p className="w-[37px] h-[15px] absolute left-[59.38px] top-1 text-xs font-bold text-[#181823]">
              Oct 10
            </p>
            <p className="w-[37px] h-[15px] absolute left-[114.73px] top-1 text-xs font-bold text-[#d30000]">
              Oct 11
            </p>
            <p className="w-[37px] h-[15px] absolute left-[173.10px] top-1 text-xs font-bold text-[#181823]">
              Oct 12
            </p>
            <p className="w-[37px] h-[15px] absolute left-[231.48px] top-1 text-xs font-bold">
              Oct 13
            </p>
            <p className="w-[37px] h-[15px] absolute left-[289.85px] top-1 text-xs font-bold text-[#181823]">
              Oct 14
            </p>
          </div>
          <p className="w-[13px] h-[15px] absolute left-[1px] top-[174.87px] text-xs font-bold text-[#1e1e1e]">
            1k
          </p>
          <p className="w-3.5 h-[15px] absolute left-[1px] top-[144.64px] text-xs font-bold text-[#1e1e1e]">
            2k
          </p>
          <p className="w-[15px] h-[15px] absolute left-[1px] top-[108.48px] text-xs font-bold text-[#1e1e1e]">
            3k
          </p>
          <p className="w-[15px] h-[15px] absolute left-[1px] top-[72.32px] text-xs font-bold text-[#1e1e1e]">
            4k
          </p>
          <p className="w-[15px] h-[15px] absolute left-[1px] top-[36.16px] text-xs font-bold text-[#1e1e1e]">
            5k
          </p>
          <p className="w-[15px] h-[15px] absolute left-[1px] top-[0px] text-xs font-bold text-[#1e1e1e]">
            6k
          </p>
          <div className="absolute left-[165px] top-[84.87px] bg-[#09202d] border-1 rounded-full w-[49.31px] h-[15.34px]"></div>
          <p className="w-8 h-[11px] absolute left-[175px] top-[87.87px] text-[8.82px] font-semibold text-white">
            ₹2,048
          </p>
        </div>
        <p className="w-[282px] h-[67px] absolute left-[76px] top-[739px] text-white">
          Amount Spent Last Month: ₹ 42137.95
        </p>
      </div>
      <div className=" w-[347px] h-[944px] absolute left-0 top-0">
        <div className="absolute left-[0px] top-[0px] bg-gradient-to-b from-[#d9d9d9] via-[#181823] to-[#2b2b3e] border-1 w-[347px] h-[944px]"></div>
        <div className=" w-[200px] h-[200px] absolute left-[74px] top-[36px]"></div>
        <div className="absolute left-[25px] top-[476px] bg-black border-1 w-[298px] h-[137px]"></div>
        <div className="absolute left-[25px] top-[701px] bg-black border-1 w-[298px] h-[137px]"></div>
        <p className="w-[254px] h-10 absolute left-[50px] top-[275px] text-[32px] font-bold text-[#a9a9a9]">
          Welcome back,
        </p>
        <p className="w-[196px] h-[45px] absolute left-[76px] top-[342px] text-4xl font-semibold text-white">
          UserName
        </p>
        <p className="w-[172px] h-[26px] absolute left-[91px] top-[495px] text-[20.85px] font-semibold text-[#c3c3c3]">
          Monthly budget
        </p>
        <p className="w-[189px] h-[26px] absolute left-[79px] top-[721px] text-[20.85px] font-semibold text-[#c3c3c3]">
          Available Balance
        </p>
        <p className="w-[209px] h-[51px] absolute left-[73px] top-[548px] text-[40.84px] font-bold text-white">
          ₹1,25,000
        </p>
        <p className="w-[238px] h-[51px] absolute left-[58px] top-[769px] text-[40.84px] font-bold text-white">
          ₹82,862.05
        </p>
      </div>
      <p className="w-[364px] h-[70px] absolute left-[493px] text-[64px] font-bold">
        Dashboard{" "}
      </p>
      <div className=" w-[482px] h-[271px] absolute left-[434px] top-[120px]">
        <div className="absolute left-[0px] top-[0px] bg-[#d7d7f5] shadow border-1 rounded-[20px] border-black border-opacity-20 w-[482px] h-[271px]"></div>
        <div className="absolute left-[42px] top-[91px] bg-[#34344c] shadow border-1 rounded-[20px] w-[167px] h-[136px]"></div>
        <p className="w-[136px] h-5 absolute left-[59px] top-[101px] text-base font-semibold text-white">
          Xbox Game Pass
        </p>
        <div className="absolute left-[275px] top-[91px] bg-[#34344c] shadow border-1 rounded-[20px] w-[167px] h-[136px]"></div>
        <p className="w-[57px] h-5 absolute left-[330px] top-[105px] text-base font-semibold text-white">
          Netflix
        </p>
        <p className="w-[74px] h-5 absolute left-[89px] top-[195px] text-base font-semibold text-white">
          ₹ 499 / M
        </p>
        <p className="w-[74px] h-5 absolute left-[322px] top-[195px] text-base font-semibold text-white">
          ₹ 699 / M
        </p>
        <p className="w-[265px] h-[30px] absolute left-[31px] top-[26px] text-2xl font-bold tracking-[0.48px]">
          Upcoming Payments
        </p>
      </div>
      <div className=" w-[434px] h-[234px] absolute left-[458px] top-[420px]">
        <p className="w-[188px] h-[25px] absolute left-[0px] top-[0px] text-[21.25px] font-semibold">
          Latest transactions
        </p>
        <p className="w-[73px] h-[21px] absolute left-[361px] top-1 text-[18.19px] font-semibold hover:underline text-[#545454]">
          <Link to="/Transactions">View all</Link>
        </p>
        {data.slice(0, 2).map((txn, index) => (
          <div className="flex mt-14">
            <div className="bg-[#d7d7f5] shadow border-2 rounded-[14px] border-[#ececf0] w-[59px] h-[55px]"></div>
            <div className="ml-4">
              <p className="text-lg">{txn.description}</p>
              <p className="text-[#545454]">{txn.date.toString()}</p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-[586px] h-[195px] absolute left-[381px] top-[700px]">
        <p className="w-[131px] h-[18px] absolute left-5 top-[41px] text-[14.68px] font-bold">
          ₹15,000 / 55,000
        </p>
        <p className="w-[126px] h-[18px] absolute left-5 top-[152px] text-[14.68px] font-bold text-[#2b2b3e]">
          ₹5,000 / 50,000
        </p>
        <p className="w-[125px] h-[27px] absolute left-5 top-[11px] text-[21.25px] font-semibold">
          Credit limit
        </p>
        <p className="w-32 h-[27px] absolute left-5 top-[122px] text-[21.25px] font-semibold">
          Online limit
        </p>
        <div className=" w-[309px] h-[140px] absolute left-60 top-4">
          <div className="absolute left-[0px] top-[0px] bg-[#d1cfcf] bg-opacity-29 border-2 rounded-[39px] border-[#fdfdfd] border-opacity-70 w-[309px] h-[140px]"></div>
          <div className="absolute left-[34px] top-[98px] bg-[#d9d9d9] border-1 rounded-full w-[238px] h-[11px]"></div>
          <div className="absolute left-[34px] top-[98px] bg-[#2ee700] border-1 rounded-full w-[132px] h-[11px]"></div>
          <div className="absolute left-[156px] top-[98px] bg-[#e7a600] border-1 w-[87px] h-[11px]"></div>
          <div className="absolute left-[243px] top-[98px] bg-[#e70000] border-1 w-[29px] h-[11px]"></div>
          <p className="w-[123px] h-[22px] absolute left-[27px] top-[26px] text-[17.09px] font-semibold">
            Expense Limit{" "}
          </p>
          <p className="w-[132px] h-[18px] absolute left-6 top-[60px] text-[14.68px] font-bold">
            ₹15,000 / 30,000
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
