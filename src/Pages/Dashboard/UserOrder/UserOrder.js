import React from "react";
import BookinOrder from "../../../Hook/BookinOrder";
import OrderInvoice from "./OrderInvoice";

const UserOrder = () => {
  const [orders] = BookinOrder();

  return (
    <div>
      <div class="overflow-x-auto mt-6">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Serial No</th>
              <th>your name</th>
              <th>Enroll</th>
              <th>Download Invoice</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => <OrderInvoice key={order._id} order={order} index={index}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrder;
