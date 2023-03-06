import React from 'react';

function BillingPanel() {
  return (
    <div className="grow">

      {/* Panel body */}
      <div className="p-6 space-y-6">
        <div>
          <h2 className="text-2xl text-slate-800 font-bold mb-4">결제 정보</h2>
          <div className="text-sm">This workspace’s Basic Plan is set to <strong className="font-medium">$34</strong> per month and will renew on <strong className="font-medium">Dec 9, 2022</strong>.</div>
        </div>

        {/* Billing Information */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">결제 상세</h3>
          <ul>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">결제 방법</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">마스터카드 ending 9282</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">수정</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">결제 주기</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">연간</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">수정</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">사업자등록번호</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">252-86-01619</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">수정</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">사업장 주소</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">서울특별시 금천구 가산디지털1로 83, 6층 601호(가산동, 파트너스타워)</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">수정</a>
              </div>
            </li>
            <li className="md:flex md:justify-between md:items-center py-3 border-b border-slate-200">
              {/* Left */}
              <div className="text-sm text-slate-800 font-medium">세금계산서용 이메일</div>
              {/* Right */}
              <div className="text-sm text-slate-800ml-4">
                <span className="mr-3">tax@dgmunit1.com</span>
                <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">수정</a>
              </div>
            </li>
          </ul>
        </section>

        {/* Invoices */}
        <section>
          <h3 className="text-xl leading-snug text-slate-800 font-bold mb-1">인보이스</h3>
          {/* Table */}
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400">
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap">
                <th className="w-full block md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Year</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Plan</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="w-full hidden md:w-auto md:table-cell py-2">
                  <div className="font-semibold text-right"></div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm">
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">2022</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-slate-200 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
              {/* Row */}
              <tr className="flex flex-wrap md:table-row md:flex-no-wrap border-b border-slate-200 py-2 md:py-0">
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium text-slate-800">2021</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left">Basic Plan - Annualy</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-left font-medium">$349.00</div>
                </td>
                <td className="w-full block md:w-auto md:table-cell py-0.5 md:py-2">
                  <div className="text-right flex items-center md:justify-end">
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">HTML</a>
                    <span className="block w-px h-4 bg-slate-200 mx-2" aria-hidden="true"></span>
                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="#0">PDF</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      {/* Panel footer */}
      <footer>
        <div className="flex flex-col px-6 py-5 border-t border-slate-200">
          <div className="flex self-end">
            <button className="btn border-slate-200 hover:border-slate-300 text-slate-600">Cancel</button>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default BillingPanel;