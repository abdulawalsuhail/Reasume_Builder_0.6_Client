import React from "react";

const CarrerHeader = () => {
  return (
    <div>
      <div class="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="my-drawer-4" class="drawer-button btn btn-primary">
            Open drawer
          </label>
        </div>
        <div class="drawer-side">
          <label for="my-drawer-4" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <li>
              <span>Sidebar Item 1</span>
            </li>
            <li>
              <span>Sidebar Item 2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarrerHeader;
