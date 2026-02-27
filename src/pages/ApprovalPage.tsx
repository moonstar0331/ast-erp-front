import React from 'react';
import SidebarLayout from "@/components/SidebarLayout.tsx";

const ApprovalPage: React.FC = () => {
  const documents = [
    { docNumber: '품의서지출2026-01-00001', requestDate: '2026-01-06', author: '허은히 책임', writeDate: '2026-01-06', title: '품의서[지출] - [정부] 정보통신공사협회 회원가입 수수료 정산 (3인, 사후)' },
    { docNumber: '출장기안서-2025-12-00036', requestDate: '2025-12-22', author: '이수현', writeDate: '2025-12-22', title: '출장기안서 - [메타버스] 수요처(동서기공) 서비스 교육' },
    { docNumber: '출장기안서-2025-12-00031', requestDate: '2025-12-17', author: '이수현', writeDate: '2025-12-17', title: '출장기안서 - 메타버스 수요처 장비 납품' },
    { docNumber: '출장기안서-2025-12-00023', requestDate: '2025-12-16', author: '김문성', writeDate: '2025-12-16', title: '출장기안서 - [디지털 트윈 시험구역 조성 사업] 서비스 모듈 운영 배포 작업' },
    { docNumber: '출장기안서-2025-12-00024', requestDate: '2025-12-12', author: '권순찬 선임', writeDate: '2025-12-12', title: '출장기안서 - [디지털트윈 시험구역 조성 사업] 도심 공기질 시뮬레이션 운영 배포 추가 작업 외' },
    { docNumber: '출장기안서-2025-12-00016', requestDate: '2025-12-10', author: '이현석 선임', writeDate: '2025-12-10', title: '출장기안서 - LG CNS - LG전자 수리여정 Web 3D 프로젝트 사전 미팅' },
    { docNumber: '출장기안서-2025-12-00014', requestDate: '2025-12-09', author: '권순찬 선임', writeDate: '2025-12-09', title: '출장기안서 - [디지털트윈 시험구역 조성 사업] 도심 공기질 시뮬레이션 운영 배포 작업 件' },
    { docNumber: '출장기안서-2025-12-00009', requestDate: '2025-12-04', author: '남유관 선임', writeDate: '2025-12-04', title: '출장기안서 - [사우디아라비아 디지털트윈 플랫폼(Phase 1) 관련 Service Request 기반 대응 지원 및 기능 개선 작업 2차 유지보수] 사우디아라비아 출장(2차) 件' },
    { docNumber: '출장기안서-2025-12-00006', requestDate: '2025-12-02', author: '이해윤 팀장', writeDate: '2025-12-02', title: '출장기안서 - [사우디 디지털트윈] KSA DT 메디나 POC 개발팀의 출장' },
    { docNumber: '출장기안서-2025-12-00001', requestDate: '2025-12-01', author: '권순찬 선임', writeDate: '2025-12-01', title: '출장기안서 - [LX 플랫폼] 하천변, 바람길 시뮬레이션 운영 배포 작업 출장' },
  ];

  return (
    <SidebarLayout>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">결재현황</h2>
            <div className="flex items-center gap-2">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                    대기
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                    진행
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm">
                    완료
                </button>
            </div>
        </div>

        <div className="flex justify-between items-center mb-4">
            <div>
                {/* Placeholder for filters */}
            </div>
            <div className="flex items-center gap-4 text-sm">
                <input type="text" placeholder="검색" className="w-48 h-8 px-2 border rounded-md" />
                <span>1-20 / 153</span>
                <select className="h-8 border rounded-md bg-white">
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                <div className="flex">
                    <button className="px-2 py-1 border rounded-l-md hover:bg-gray-100">-</button>
                    <button className="px-2 py-1 border-t border-b border-r rounded-r-md hover:bg-gray-100">+</button>
                </div>
            </div>
        </div>

        {/* Documents Table */}
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="py-3 px-6">제목</th>
                    <th scope="col" className="py-3 px-6">문서번호</th>
                    <th scope="col" className="py-3 px-6">시행요청</th>
                    <th scope="col" className="py-3 px-6">작성자</th>
                    <th scope="col" className="py-3 px-6">작성일자</th>
                </tr>
            </thead>
            <tbody>
                {documents.map(doc => (
                    <tr key={doc.docNumber} className="bg-white border-b hover:bg-gray-50">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                            {doc.title}
                        </th>
                        <td className="py-4 px-6">{doc.docNumber}</td>
                        <td className="py-4 px-6">{doc.requestDate}</td>
                        <td className="py-4 px-6">{doc.author}</td>
                        <td className="py-4 px-6">{doc.writeDate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </SidebarLayout>
  );
};

export default ApprovalPage;
