'use client';
import useUpdateLogger from "@/hooks/useUpdateLogger";
import { useState } from "react"

export default function Hooks() {
  const [value, setValue] = useState("");
  useUpdateLogger(value);
  return (
    <input 
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      placeholder="escreve algo"
    />
  )
}
