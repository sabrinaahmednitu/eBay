"use client";

import { useState, useEffect } from "react";
import { adminGetStatsAction } from "@/actions/admin.actions";

interface OrderItem {
  _id: string;
  buyer: { name: string; email: string };
  seller: { name: string };
  totalAmount: number;
  grandTotal: number;
  orderStatus: string;
  paymentStatus: string;
  paymentMethod: string;
  createdAt: string;
  items: Array<{ title: string; quantity: number; price: number }>;
}

export default function AdminOrdersPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await adminGetStatsAction();
      if (res.success) setStats((res as any).data);
      setLoading(false);
    };
    fetch();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
        <p className="text-gray-500 text-sm mt-1">View and manage all platform orders</p>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stats?.orders?.total || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="text-sm text-gray-500">Paid Orders</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{stats?.orders?.paid || 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-2xl font-bold text-indigo-600 mt-1">${(stats?.revenue?.totalSales || 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Placeholder table */}
      <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
        <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Order details coming soon</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Detailed order management with filtering, status updates, and tracking will be available here.
        </p>
      </div>
    </div>
  );
}
