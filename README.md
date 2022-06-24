# Milestone-Project-1

Project Description
I plan on making a basic version of chess. It will be pvp.

Game Logic

Setup:
an 8x8 square grid with alternating color scheme should be shown.
The top 2 and bottom two rows should have the pieces in them when the game starts.

Pieces with white on the bottom (1) and black on the top (8):
row 1 & 8: rook, knight, bishop, queen, king, bishop, knight, rook
row 2 & 7: all pawns

The player should be able to move any of their pieces on a virtual chess board according to the rules of chess.

Example of piece movement:

Pawn:
Can move one or two spaces forward if it has not been moved.
Otherwise it can only move one space forward.
Can't move over or into a space that is taken up by a piece of the same color.
Can't take an opposing piece unless it is one diagonal space away in front of the pawn.
If the pawn reaches the last row it becomes a queen.

Players should be able to take opposing pieces based on the rules of chess.  

Example: Pawn can only take a piece if it is one diagonal space away and in front of the pawn.

White should move first and then turns will alternate.
Have a submit button or similar concept to end each player's turn.
If a king is in check (can be taken), only moves that remove the check can be taken.
Game over when a king is in checkmate
There should be a reset button to return pieces to their starting position.

Deliverables

MVP Criteria
A chess board with the proper setup (See game logic) should show at the start.
Players can move each piece according to the rules of chess.
Pieces should be removed from the board when a piece legally takes them.
If a player's king is in check only moves that remove check should be made.
Game ends if a player's king is in checkmate.
Reset button that resets the pieces to their starting positions.

Post-MVP Plans
I'd like to have some way to track turns and not just have both sides able to move at the same time.
Maybe have an animation of the board turning between turns.

Stretch: Quality of life improvements. Such as highlighting where a piece can be moved etc.

Something I don't know how to do yet: animations maybe? Turn timers?

Project Planning
Date	Goals
Thu. 06/23	Create GitHub repository. Complete README.md.
Sun. 06/26	complete chess board and have all assets
Tue. 06/28	finish base logic
Thu. 06/30	Improve on the design
Sun. 07/03	Deploy MVP to GitHub Pages.
Tue. 07/05	Submit completed project. Project presentations.