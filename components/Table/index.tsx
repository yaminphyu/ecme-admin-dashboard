import { TableProps } from "@/types";
import React from "react";

export default function Table<T extends { id: number }>({
  columns,
  data,
}: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key.toString()}
                className="p-2 text-left text-gray-400 uppercase border-b"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b">
              {columns.map((col) => (
                <td
                  key={col.key.toString()}
                  className='p-2'
                >
                  {col.render
                    ? col.render(row)
                    : (row[col.key as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

