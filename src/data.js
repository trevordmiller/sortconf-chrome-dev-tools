// ================================================================================
// DATA
// ================================================================================

'use strict';

// Grab user's github data via the GitHub API
var githubData = getData('https://api.github.com/users/trevordmiller');

// Global context for Handlebars templates in `src/templates`
var data = {
	githubData: githubData,



	// ------------------------------------------
	// CUSTOMIZE BELOW
	// ------------------------------------------

// 	<pre>
// 		<code>
// var coolFunction = function() {
// console.log("This is block of code.");
// };
// 		</code>
// 	</pre>

	theme: {
		mainColor: '#49C4C5',
		specialTransition: 'zoom'
	},
	title: 'SORT 2014',
	subtitle: 'Mastering the Chrome Developer Tools',
	greetingText: 'Hello!',
	goodbyeText: 'Thanks!',
	sections: [
		{
			title: 'Dev Tools Overview',
			subtitle: 'A quick look around the dev tools',
			slides: [
				{
					title: 'Launching',
					uniqueContent: '
						<div class="fragment roll-in">
							<pre>
								<code>
CMD + OPT + I
								</code>
							</pre>
							<p>Or...</p>
							<p><small>View > Developer > Developer Tools</small></p>
							<p>Or...</p>
							<p><small>"Inspect Element"</small></p>
						</div>
					'
				},
				{
					title: 'Settings',
					uniqueContent: '
						<ul>
							<li class="fragment roll-in">Settings cog</li>
							<li class="fragment roll-in">Docking</li>
						</ul>
					'
				}
			]
		},
		{
			title: 'Device Mode',
			subtitle: 'Mobile testing and emulation',
			slides: [
				{
					title: 'Launching device mode',
					uniqueContent: '
					'
				},
				{
					title: 'Device emulation',
					uniqueContent: '
					'
				},
				{
					title: 'Media queries',
					uniqueContent: '
					'
				},
				{
					title: 'Network throttling',
					uniqueContent: '
					'
				}
			]
		},
		{
			title: 'Elements Tab',
			subtitle: '',
			slides: [
				{
					title: 'The DOM',
					uniqueContent: '
					'
				},
				{
					title: 'Styles & Computed panes',
					uniqueContent: '
					'
				},
				{
					title: 'Event Listeners pane',
					uniqueContent: '
					'
				},
				{
					title: '"Break on" menu',
					uniqueContent: '
					'
				}
			]
		},
		{
			title: 'Network Tab',
			subtitle: '',
			slides: [
				{
					title: 'Clear & Refresh',
					uniqueContent: '
					'
				},
				{
					title: 'Size',
					uniqueContent: '
					'
				},
				{
					title: 'Filter',
					uniqueContent: '
					'
				},
				{
					title: 'Timeline',
					uniqueContent: '
						<blockquote class="fragment roll-in">
							<p class="fragment roll-in"> <strong>DOMContentLoaded</strong> fires when document has been completely parsed (doesn\'t wait for stylesheets, and images to finish loading).</p>
							<p class="fragment roll-in"><strong>load</strong> fires when the page is fully loaded.</p>
						</blockquote>
					'
				}
			]
		},
		{
			title: 'Sources Tab',
			subtitle: '',
			slides: [
				{
					title: 'Pretty Print',
					uniqueContent: '
					'
				},
				{
					title: 'Breakpoints',
					uniqueContent: '
						<div class="well fragment roll-in">
							<p><span class="code">examples/breakpoints.js</span></p>
						</div>
					'
				},
				{
					title: 'Watch expressions',
					uniqueContent: '
						<div class="fragment roll-in">
							<a class="button js-watch-expression-button">Get Groceries</a>
							<div class="well">
								<p><span class="code">examples/watch-expressions.js</span></p>
							</div>
						</div>
					'
				},
				{
					title: 'Scope variables',
					uniqueContent: '
					'
				},
				{
					title: 'DOM breakpoints',
					uniqueContent: '
					'
				},
				{
					title: 'Searching',
					uniqueContent: '
						<p class="fragment roll-in">Text search the current file: <span class="code">CMD + F</span></p>
						<p class="fragment roll-in">Text search all files: <span class="code">CMD + OPT + F</span></p>
						<p class="fragment roll-in">Find a function or CSS rule: <span class="code">CMD + SHIFT + O</span></p>
					'
				}
			]
		},
		{
			title: 'Resources Tab',
			subtitle: '',
			slides: [
				{
					title: 'All sorts of cool stuff...',
					uniqueContent: '
						<div class="fragment roll-in">
							<p>For one example, add an item to local storage:</p>
							<pre>
								<code class="javascript">
	var username = \'fred\';
	localStorage.username = username;
								</code>
							</pre>
						</div>
					'
				}
			]
		},
		{
			title: 'Console Tab',
			subtitle: '',
			slides: [
				{
					title: 'Console drawer',
					uniqueContent: '
						<pre class="fragment roll-in">
							<code>
ESC
							</code>
						</pre>

						<div class="fragment roll-in">
							Or...
							<p><small>Tap the little icon...</small></p>
						</div>
					'
				},
				{
					title: 'Grab selected node',
					uniqueContent: '
						<div class="fragment roll-in">
							<pre>
								<code>
$0
								</code>
							</pre>
						</div>
						<div class="fragment roll-in">
							<p>Grab this button node in the console:</p>
							<a class="button">Grab me!</a>
						</div>
					'
				},
				{
					title: 'Shell prompt',
					uniqueContent: '
						<div class="fragment roll-in">
							<p>Add an <span class="code">alert</span> with a <span class="code">click</span> to this circle:</p>
							<a class="circle"></a>
						</div>
					'
				},
				{
					title: 'Logging to the console',
					uniqueContent: '
						<div class="fragment roll-in">
							<pre>
								<code>
console.log(stuff);
								</code>
							</pre>
						</div>
						<div class="fragment roll-in">
							<p>Submit your favorite color:</p>
							<div class="submit-input">
								<input class="js-favorite-color-input" />
								<a class="button js-console-log-button" href="">Submit</a>
							</div>
							<div class="well">
								<p><span class="code">examples/console-log.js</span></p>
							</div>
						</div>
					'
				},
				{
					title: 'Debugger',
					uniqueContent: '
						<div class="fragment roll-in">
							<pre>
								<code>
debugger;
								</code>
							</pre>
						</div>
						<div class="fragment roll-in">
							<p>Dubug when the button is tapped:</p>
							<a class="button js-debugger-button">Debug</a>
							<div class="well">
								<p><span class="code">examples/debugger.js</span></p>
							</div>
						</div>
					'
				},
			]
		},
		{
			title: 'Q & A',
			subtitle: '',
			slides: [
			]
		},
		{
			title: 'More info',
			subtitle: '<a  href="https://developer.chrome.com/devtools">developer.chrome.com</a>',
			slides: [
			]
		}
	]
};
