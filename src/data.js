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
COMMAND + OPTION + i
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
							<li class="fragment roll-in">Console shortcut</li>
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
						<blockquote><p class="fragment roll-in">The <strong>DOMContentLoaded</strong> event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.</p>
						<p class="fragment roll-in">The <strong>load</strong> event can be used to detect a fully-loaded page.</p></blockquote>
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
						<ul>
							<li>Step over</li>
							<li>Step into</li>
							<li>Step out</li>
							<li>Deactivate breakpoints</li>
							<li>Pause on exceptions</li>
						</ul>
					'
				},
				{
					title: 'Watch expressions',
					uniqueContent: '
						<a class="button watch-button">Get Groceries</a>
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
				}
			]
		},
		{
			title: 'Console Tab',
			subtitle: '',
			slides: [
				{
					title: 'Console dual setup',
					uniqueContent: '
						<pre class="fragment roll-in">
							<code>
ESC
							</code>
						</pre>

						<div class="fragment roll-in">
							Or...
							<p>Tap the little icon...</p>
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
							<p>Grab the button node in the console:</p>
							<a class="button">Grab me!</a>
						</div>
					'
				},
				{
					title: 'Shell prompt',
					uniqueContent: '
						<p>Add an <span class="code">alert</span> with a <span class="code">click</span> to this button.</p>
						<a class="button">Hello!</a>
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
							<a class="button js-debugger-button">Debug time!</a>
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
