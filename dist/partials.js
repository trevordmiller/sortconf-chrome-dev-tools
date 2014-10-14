this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["Templates"] = this["Handlebars"]["Templates"] || {};

Handlebars.registerPartial("end", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;


  buffer += "\n<section class=\"section-title\" data-background=\"#1E2944\" data-transition=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.theme)),stack1 == null || stack1 === false ? stack1 : stack1.specialTransition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	";
  stack1 = self.invokePartial(partials['sort-logo'], 'sort-logo', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = self.invokePartial(partials['lds-logo'], 'lds-logo', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<p><small>&copy; 2014 by Intellectual Reserve, Inc. All rights reserved</small></p>\n</section>\n";
  return buffer;
  }));

Handlebars.registerPartial("lds-logo", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<img class=\"lds-logo\" src=\"images/lds-logo.png\" alt=\"The Church of Jesus Christ of Latter-day Saints\" />\n";
  }));

Handlebars.registerPartial("section", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<h3>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		<section>\n			<h2>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n			";
  if (helper = helpers.uniqueContent) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uniqueContent); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</section>\n	";
  return buffer;
  }

  buffer += "\n<section class=\"section-title\" data-background=\"#49C4C5\" data-transition=\"zoom\">\n	<h1>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.subtitle), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</section>\n\n	\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.slides), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("sort-logo", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"sort-logo\">\n	SORT\n\n	<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n		viewBox=\"0 0 39.661 42.5\" enable-background=\"new 0 0 39.661 42.5\" xml:space=\"preserve\">\n	<path fill=\"#F8292B\" d=\"M15.661,35l-3.833,7.5c-22-15.167-7.229-36.468-3.729-37.302L5.161,2.833L15.661,0l-1,10.5l-3.167-2.562\n		C11.494,7.938-0.672,22.667,15.661,35z\"/>\n	<path fill=\"#F8292B\" d=\"M24,7.5L27.833,0c22,15.167,7.229,36.468,3.729,37.302l2.938,2.365L24,42.5L25,32l3.167,2.562\n		C28.167,34.562,40.333,19.833,24,7.5z\"/>\n	</svg>\n\n	2014\n</h1>\n";
  }));

Handlebars.registerPartial("start", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); partials = this.merge(partials, Handlebars.partials); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n			<li class=\"fragment\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</li>\n		";
  return buffer;
  }

  buffer += "\n<section class=\"section-title\" data-background=\"#1E2944\" data-transition=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.theme)),stack1 == null || stack1 === false ? stack1 : stack1.specialTransition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	";
  stack1 = self.invokePartial(partials['sort-logo'], 'sort-logo', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<h4>";
  if (helper = helpers.subtitle) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.subtitle); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n</section>\n\n\n<section>\n	<img class=\"constrain-width\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.githubData)),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" alt=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.githubData)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "'s avatar'\" />\n	<h2>";
  if (helper = helpers.greetingText) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.greetingText); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h2>\n	<p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.githubData)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n	<p><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.githubData)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">@"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.githubData)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n</section>\n\n\n<section>\n	<h2>What to expect</h2>\n	<ul>\n		<li class=\"fragment roll-in\">Covers <strong>basic</strong> to <strong>advanced</strong> features.</li>\n		<li class=\"fragment roll-in\">Can't cover everything, but <strong>key</strong> parts.</li>\n		<li class=\"fragment roll-in\">Mac hotkeys.</li>\n	</ul>\n</section>\n\n\n<section>\n	<h2>Presentation Outline</h2>\n	<ul>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sections), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n</section>\n\n\n<section>\n	<h2>Follow along</h2>\n	<div class=\"fragment roll-in\">\n		<h3>If you <strong>really</strong> want to learn, <strong>try it with me!</strong></h3>\n		<a href=\"http://trevordmiller.github.io/sortconf-chrome-dev-tools\">http://trevordmiller.github.io/sortconf-chrome-dev-tools</a>\n	</div>\n</section>\n";
  return buffer;
  }));