
import DataTable from '@/components/Table';
import React from 'react'

const NssNcc = () => {


    const titles = [
        { id: "name", name: "Name" },
        { id: "roll", name: "Roll" },
        { id: "nss", name: "NSS" },
        { id: "ncc", name: "NCC" },
        { id: "nss_ncc", name: "NSS+NCC" },
        { id: "nss_ncc_total", name: "NSS+NCC Total" },
    ];
    

  return (
    <>
    <div>Hello</div>
     <DataTable />
    </>
  )
}

export default NssNcc