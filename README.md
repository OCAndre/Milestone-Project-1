# Milestone-Project-1 - Chess Game

## GitHub pages link
https://ocandre.github.io/Milestone-Project-1/

## Project Description
This project creates a basic chessboard that players can freely move pieces on. It will be built for pvp and will not have logic for a computer opponent. Further Updates will begin to limit where pieces can move on the board according to the rules of chess.

## Demo
![plot](./assets/Images/DEMO%20Screenshot.png)

## Technologies Used
- HTML
- CSS
- JavaScript

## Installation and Dependencies
- None. Just open the pages link.

## Game Logic

### Setup:
- An 8x8 square grid with alternating color scheme (Both in row and in coloumn) should be shown.
- The top 2 and bottom two rows should have the pieces in them when the game starts.
- Pieces with white on the bottom (1) and black on the top (8):
row 1 & 8: rook, knight, bishop, queen, king, bishop, knight, rook
row 2 & 7: all pawns

### logic
- The player should be able to move any of their pieces on a virtual chess board according to the rules of chess.

    - Example movement (pawn):
        - Can move one or two spaces forward if it has not been moved.
        - Otherwise it can only move one space forward.
        - Can't move over or into a space that is taken up by a piece of the same color.
        - Can't take an opposing piece unless it is one diagonal space away in front of the pawn.
        - If the pawn reaches the last row it becomes a queen.

- Players should be able to take opposing pieces based on the rules of chess.  

    - Example: Pawn can only take a piece if it is one diagonal space away and in front of the pawn.

- White should move first and then turns will alternate.
- Have a submit button or similar concept to end each player's turn.
- If a king is in check (can be taken), only moves that remove the check can be taken.
-Game over when a king is in checkmate
- There should be a reset button to return pieces to their starting position.

## Endpoints
- Main chessboard page where the game is played
- How to play page (Currently needs styled and could probably be updated from a pop up window)

## Project Deliverables

### MVP Criteria
- A chess board with the proper setup (See game logic) should show at the start.
- Players can move each piece. (can move freely atm besides king and pawn)
- Pieces should be removed from the board when a piece takes them.
- Game ends if a player's king is taken.

### Post-MVP Plans
- limit movement based on chess rules. (King, pawn, and knight completed) (pawns and knights seem to occasionally have bugs in certain tiles.)
- Have some way to track turns and not just have both sides able to move at the same time.
- Have an animation of the board turning between turns.
- change pawns into queens if they reach the opposite side of the board.
- Have a way to check if a king is in check.
- If a player's king is in check only moves that remove check should be made.


### Stretch: 
- Quality of life improvements: such as highlighting where a piece can be moved, undo button etc.
- Reset button that resets the pieces to their starting positions.

### Something I don't know how to do yet: 
- animations
- Turn timers

# Project Planning

| DATE       | GOALS                                 |
|------------|---------------------------------------|
| Thu. 06/23 | Create GitHub repository. Complete README.md. |
|    Sun. 06/26        |       Complete chess board and have all assets.                                |
|Tue. 06/28|         Finish base logic.                              |
|Thu. 06/30|         Improve on the design.                              |
|Sun. 07/03|         Deploy MVP to GitHub Pages.                              |
|Tue. 07/05|         Submit completed project. Project presentations                              |

# Outstanding Issues
## Known bugs
- column 1 is not always letting the pieces with limited movement enter the spaces they should be able to.
- occasionally a piece will enter the space with another piece without capturing it.
## Unfinished Functionality
- restricted movement for Rooks, Bishops, and Queens.
- stretch goals 