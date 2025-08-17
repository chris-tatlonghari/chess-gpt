import { Controller } from "@hotwired/stimulus"
import { Chessground } from "chessground";

// Connects to data-controller="chess"
export default class extends Controller {
  connect() {
    const config = {};
    const ground = Chessground(document.getElementById('board'), config);
  }
}
