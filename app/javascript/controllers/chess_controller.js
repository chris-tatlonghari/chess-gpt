import { Controller } from "@hotwired/stimulus"
import { Chessground } from "chessground";
import { Chess } from "chess.js"

// Connects to data-controller="chess"
export default class extends Controller {
  connect() {
    const config = {};
    var ground = Chessground(document.getElementById('board'), config);
    var game = new Chess()

    function makeRandomMove () {
      var possibleMoves = game.moves()

      // exit if the game is over
      if (game.isGameOver()) return

      var randomIdx = Math.floor(Math.random() * possibleMoves.length)
      game.move(possibleMoves[randomIdx])
      ground = Chessground(document.getElementById('board'), { fen: game.fen() })

      window.setTimeout(makeRandomMove, 50)
    }

    window.setTimeout(makeRandomMove, 50)
  }
}
