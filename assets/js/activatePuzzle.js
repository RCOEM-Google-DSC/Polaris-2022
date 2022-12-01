/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
	solution: 			[[null, null, null, null, null, null, null, 'A', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'M', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'O', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'N', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'G', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, 'U', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, 'P', 'R', 'A', 'S', 'H', 'A', 'D', null, null, null, 'S', 'P', 'L', 'I', 'N', 'T', 'E', 'R', null, null, null, null],
	[null, null, null, null, null, null, null, null, null, null, 'U', null, null, null, 'O', null, 'U', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'P', 'U', 'C', 'K', 'M', 'A', 'N', null, 'I', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'O', null, 'K', null, null, null, 'I', null, 'G', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'K', null, 'H', null, null, null, 'C', null, 'I', null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'E', null, 'U', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'M', null, 'N', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	[null, null, null, null, null, null, null, null, 'O', null, 'T', 'E', 'T', 'R', 'I', 'S', null, null, null, null, null, null, null, null, null, null],
	['D', 'O', 'N', 'K', 'E', 'Y', 'K', 'O', 'N', 'G', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
],


	 index: 			
	 [[null, null, null, null, null, null, null, 1, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, 2, null, null, null, null, null, 3, null, null, null, 4, null, 5, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [null, null, null, null, null, null, null, null, null, null, 7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
	 [8, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]],

  questions_across: ["2. GDSC's event Bappa ka ______",
  "4. A mutant rat",
  "6. Game developed by Namco for arcades",
  "7. A puzzle video game",
  "8. I wait for my Kong to land on my top",],

  questions_down: [		 
	"1. Players can either be 'Crewmate' or 'Impostor' ",
	"3. Kill a duck with an artificial gun ",
	"4. A blue Anthropomorphic hedgehog ",
	"5. I protect my princess fair and dear",
	"6. Who is that pokemon?",]

};


cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),false,options);