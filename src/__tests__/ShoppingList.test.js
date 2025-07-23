import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // ✅ Add this line
import ShoppingList from "../components/ShoppingList";

test("removes an item from the list when the delete button is clicked", async () => {
  render(<ShoppingList />);

  // Confirm Yogurt is visible
  const yogurt = await screen.findByText(/Yogurt/i);
  expect(yogurt).toBeInTheDocument();

  // Click the first delete button (Yogurt is the first item)
  const deleteButtons = screen.getAllByText(/Delete/i);
  fireEvent.click(deleteButtons[0]);

  // Yogurt should no longer exist
  expect(screen.queryByText(/Yogurt/i)).not.toBeInTheDocument();
});
