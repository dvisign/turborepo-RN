"use client";
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";
function Client({ children }: { children: ReactNode }) {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (!user.id && !user.name) router.push("/");
  }, [user, router]);
  // 로그아웃일때 레이아웃
  if (!user.name || !user.id) return <>{children}</>;
  // 로그인 후 레이아웃
  return <>{children}</>;
}

export default Client;
