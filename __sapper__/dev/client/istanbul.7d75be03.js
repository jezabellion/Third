import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, B as Bonkers, o as create_component, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.35223b30.js';

/* src/components/Truman.svelte generated by Svelte v3.20.1 */

const file = "src/components/Truman.svelte";

function create_fragment(ctx) {
	let div4;
	let nav;
	let div0;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let a1;
	let span0;
	let t1;
	let span1;
	let t2;
	let span2;
	let t3;
	let div3;
	let div2;
	let div1;
	let a2;
	let t4;
	let t5;
	let a3;
	let t6;
	let t7;
	let a4;
	let t8;
	let t9;
	let a5;
	let t10;

	const block = {
		c: function create() {
			div4 = element("div");
			nav = element("nav");
			div0 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			a1 = element("a");
			span0 = element("span");
			t1 = space();
			span1 = element("span");
			t2 = space();
			span2 = element("span");
			t3 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			a2 = element("a");
			t4 = text("Morocco");
			t5 = space();
			a3 = element("a");
			t6 = text("Istanbul");
			t7 = space();
			a4 = element("a");
			t8 = text("Peru");
			t9 = space();
			a5 = element("a");
			t10 = text("Russia");
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			nav = claim_element(div4_nodes, "NAV", { class: true });
			var nav_nodes = children(nav);
			div0 = claim_element(nav_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a0 = claim_element(div0_nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", {
				alt: true,
				src: true,
				width: true,
				height: true
			});

			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);

			a1 = claim_element(div0_nodes, "A", {
				role: true,
				class: true,
				"aria-label": true,
				"aria-expanded": true
			});

			var a1_nodes = children(a1);
			span0 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span0).forEach(detach_dev);
			t1 = claim_space(a1_nodes);
			span1 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span1).forEach(detach_dev);
			t2 = claim_space(a1_nodes);
			span2 = claim_element(a1_nodes, "SPAN", { "aria-hidden": true });
			children(span2).forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(nav_nodes);
			div3 = claim_element(nav_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a2 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a2_nodes = children(a2);
			t4 = claim_text(a2_nodes, "Morocco");
			a2_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			a3 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a3_nodes = children(a3);
			t6 = claim_text(a3_nodes, "Istanbul");
			a3_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			a4 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a4_nodes = children(a4);
			t8 = claim_text(a4_nodes, "Peru");
			a4_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);
			a5 = claim_element(div1_nodes, "A", { class: true, href: true });
			var a5_nodes = children(a5);
			t10 = claim_text(a5_nodes, "Russia");
			a5_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			nav_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "alt", "logomark");
			if (img.src !== (img_src_value = "../wanderlust-white.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "width", "112");
			attr_dev(img, "height", "28");
			add_location(img, file, 4, 8, 154);
			attr_dev(a0, "class", "navbar-item");
			attr_dev(a0, "href", "shoes");
			add_location(a0, file, 3, 6, 109);
			attr_dev(span0, "aria-hidden", "true");
			add_location(span0, file, 7, 8, 352);
			attr_dev(span1, "aria-hidden", "true");
			add_location(span1, file, 8, 8, 393);
			attr_dev(span2, "aria-hidden", "true");
			add_location(span2, file, 9, 8, 434);
			attr_dev(a1, "role", "button");
			attr_dev(a1, "class", "navbar-burger is-hidden-tablet");
			attr_dev(a1, "aria-label", "menu");
			attr_dev(a1, "aria-expanded", "false");
			add_location(a1, file, 6, 6, 247);
			attr_dev(div0, "class", "navbar-brand");
			add_location(div0, file, 2, 4, 76);
			attr_dev(a2, "class", "navbar-item");
			attr_dev(a2, "href", "travel");
			add_location(a2, file, 16, 10, 617);
			attr_dev(a3, "class", "navbar-item");
			attr_dev(a3, "href", "istanbul");
			add_location(a3, file, 17, 10, 676);
			attr_dev(a4, "class", "navbar-item");
			attr_dev(a4, "href", "peru");
			add_location(a4, file, 18, 10, 738);
			attr_dev(a5, "class", "navbar-item");
			attr_dev(a5, "href", "russia");
			add_location(a5, file, 19, 10, 792);
			attr_dev(div1, "class", "field is-grouped");
			add_location(div1, file, 15, 8, 576);
			attr_dev(div2, "class", "navbar-item");
			add_location(div2, file, 14, 6, 542);
			attr_dev(div3, "class", "navbar-end is-hidden-mobile");
			add_location(div3, file, 13, 4, 494);
			attr_dev(nav, "class", "navbar is-transparent is-spaced");
			add_location(nav, file, 1, 2, 26);
			attr_dev(div4, "class", "hero-head");
			add_location(div4, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, nav);
			append_dev(nav, div0);
			append_dev(div0, a0);
			append_dev(a0, img);
			append_dev(div0, t0);
			append_dev(div0, a1);
			append_dev(a1, span0);
			append_dev(a1, t1);
			append_dev(a1, span1);
			append_dev(a1, t2);
			append_dev(a1, span2);
			append_dev(nav, t3);
			append_dev(nav, div3);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, a2);
			append_dev(a2, t4);
			append_dev(div1, t5);
			append_dev(div1, a3);
			append_dev(a3, t6);
			append_dev(div1, t7);
			append_dev(div1, a4);
			append_dev(a4, t8);
			append_dev(div1, t9);
			append_dev(div1, a5);
			append_dev(a5, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Truman> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Truman", $$slots, []);
	return [];
}

class Truman extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Truman",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/istanbul.svelte generated by Svelte v3.20.1 */
const file$1 = "src/routes/istanbul.svelte";

function create_fragment$1(ctx) {
	let section;
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let t2;
	let div2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let p2;
	let t7;
	let t8;
	let div3;
	let figure0;
	let img0;
	let img0_src_value;
	let t9;
	let div5;
	let div4;
	let h2;
	let t10;
	let t11;
	let p3;
	let t12;
	let t13;
	let div6;
	let figure1;
	let img1;
	let img1_src_value;
	let t14;
	let figure2;
	let img2;
	let img2_src_value;
	let t15;
	let figure3;
	let img3;
	let img3_src_value;
	let t16;
	let figure4;
	let img4;
	let img4_src_value;
	let t17;
	let current;
	const truman = new Truman({ $$inline: true });
	const bonkers = new Bonkers({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			create_component(truman.$$.fragment);
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text("Istanbul");
			t2 = space();
			div2 = element("div");
			p0 = element("p");
			t3 = text("Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			t4 = space();
			p1 = element("p");
			t5 = text("* * *");
			t6 = space();
			p2 = element("p");
			t7 = text("Andrea & Jeremy");
			t8 = space();
			div3 = element("div");
			figure0 = element("figure");
			img0 = element("img");
			t9 = space();
			div5 = element("div");
			div4 = element("div");
			h2 = element("h2");
			t10 = text("Aït Benhaddou");
			t11 = space();
			p3 = element("p");
			t12 = text("* * *");
			t13 = space();
			div6 = element("div");
			figure1 = element("figure");
			img1 = element("img");
			t14 = space();
			figure2 = element("figure");
			img2 = element("img");
			t15 = space();
			figure3 = element("figure");
			img3 = element("img");
			t16 = space();
			figure4 = element("figure");
			img4 = element("img");
			t17 = space();
			create_component(bonkers.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(truman.$$.fragment, section_nodes);
			t0 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Istanbul");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "* * *");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			p2 = claim_element(div2_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "Andrea & Jeremy");
			p2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			figure0 = claim_element(div3_nodes, "FIGURE", {});
			var figure0_nodes = children(figure0);
			img0 = claim_element(figure0_nodes, "IMG", { alt: true, src: true, class: true });
			figure0_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h2 = claim_element(div4_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t10 = claim_text(h2_nodes, "Aït Benhaddou");
			h2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t12 = claim_text(p3_nodes, "* * *");
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			figure1 = claim_element(div6_nodes, "FIGURE", {});
			var figure1_nodes = children(figure1);
			img1 = claim_element(figure1_nodes, "IMG", { alt: true, src: true, class: true });
			figure1_nodes.forEach(detach_dev);
			t14 = claim_space(div6_nodes);
			figure2 = claim_element(div6_nodes, "FIGURE", {});
			var figure2_nodes = children(figure2);
			img2 = claim_element(figure2_nodes, "IMG", { alt: true, src: true, class: true });
			figure2_nodes.forEach(detach_dev);
			t15 = claim_space(div6_nodes);
			figure3 = claim_element(div6_nodes, "FIGURE", {});
			var figure3_nodes = children(figure3);
			img3 = claim_element(figure3_nodes, "IMG", { alt: true, src: true, class: true });
			figure3_nodes.forEach(detach_dev);
			t16 = claim_space(div6_nodes);
			figure4 = claim_element(div6_nodes, "FIGURE", {});
			var figure4_nodes = children(figure4);
			img4 = claim_element(figure4_nodes, "IMG", { alt: true, src: true, class: true });
			figure4_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			claim_component(bonkers.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-fpa6fq");
			add_location(h1, file$1, 53, 6, 2708);
			attr_dev(div0, "class", "container");
			add_location(div0, file$1, 52, 4, 2678);
			attr_dev(div1, "class", "hero-body");
			add_location(div1, file$1, 51, 2, 2650);
			attr_dev(section, "class", "hero is-link is-fullheight svelte-fpa6fq");
			add_location(section, file$1, 47, 0, 2591);
			attr_dev(p0, "class", "svelte-fpa6fq");
			add_location(p0, file$1, 62, 2, 2793);
			attr_dev(p1, "class", "svelte-fpa6fq");
			add_location(p1, file$1, 63, 2, 2915);
			attr_dev(p2, "class", "svelte-fpa6fq");
			add_location(p2, file$1, 64, 2, 2930);
			attr_dev(div2, "class", "container blurb svelte-fpa6fq");
			add_location(div2, file$1, 61, 0, 2761);
			attr_dev(img0, "alt", "handsome man");
			if (img0.src !== (img0_src_value = "images/bbb.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "class", "svelte-fpa6fq");
			add_location(img0, file$1, 68, 10, 3009);
			add_location(figure0, file$1, 68, 2, 3001);
			attr_dev(div3, "class", "container image-gallery svelte-fpa6fq");
			add_location(div3, file$1, 67, 0, 2961);
			attr_dev(h2, "class", "svelte-fpa6fq");
			add_location(h2, file$1, 73, 4, 3131);
			attr_dev(p3, "class", "svelte-fpa6fq");
			add_location(p3, file$1, 74, 4, 3158);
			attr_dev(div4, "class", "chapter-header svelte-fpa6fq");
			add_location(div4, file$1, 72, 2, 3098);
			attr_dev(div5, "class", "container");
			add_location(div5, file$1, 71, 0, 3072);
			attr_dev(img1, "alt", "handsome man");
			if (img1.src !== (img1_src_value = "images/aaa.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "class", "svelte-fpa6fq");
			add_location(img1, file$1, 79, 10, 3236);
			add_location(figure1, file$1, 79, 2, 3228);
			attr_dev(img2, "alt", "handsome man");
			if (img2.src !== (img2_src_value = "images/bbb.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "class", "svelte-fpa6fq");
			add_location(img2, file$1, 80, 10, 3301);
			add_location(figure2, file$1, 80, 2, 3293);
			attr_dev(img3, "alt", "handsome man");
			if (img3.src !== (img3_src_value = "images/ccc.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "class", "svelte-fpa6fq");
			add_location(img3, file$1, 81, 10, 3366);
			add_location(figure3, file$1, 81, 2, 3358);
			attr_dev(img4, "alt", "handsome man");
			if (img4.src !== (img4_src_value = "images/ddd.jpg")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "class", "svelte-fpa6fq");
			add_location(img4, file$1, 82, 10, 3431);
			add_location(figure4, file$1, 82, 2, 3423);
			attr_dev(div6, "class", "container image-gallery svelte-fpa6fq");
			add_location(div6, file$1, 78, 0, 3188);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			mount_component(truman, section, null);
			append_dev(section, t0);
			append_dev(section, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, p0);
			append_dev(p0, t3);
			append_dev(div2, t4);
			append_dev(div2, p1);
			append_dev(p1, t5);
			append_dev(div2, t6);
			append_dev(div2, p2);
			append_dev(p2, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, figure0);
			append_dev(figure0, img0);
			insert_dev(target, t9, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, h2);
			append_dev(h2, t10);
			append_dev(div4, t11);
			append_dev(div4, p3);
			append_dev(p3, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, figure1);
			append_dev(figure1, img1);
			append_dev(div6, t14);
			append_dev(div6, figure2);
			append_dev(figure2, img2);
			append_dev(div6, t15);
			append_dev(div6, figure3);
			append_dev(figure3, img3);
			append_dev(div6, t16);
			append_dev(div6, figure4);
			append_dev(figure4, img4);
			insert_dev(target, t17, anchor);
			mount_component(bonkers, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(truman.$$.fragment, local);
			transition_in(bonkers.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(truman.$$.fragment, local);
			transition_out(bonkers.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(truman);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(div5);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(div6);
			if (detaching) detach_dev(t17);
			destroy_component(bonkers, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Istanbul> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Istanbul", $$slots, []);
	$$self.$capture_state = () => ({ Bonkers, Truman });
	return [];
}

class Istanbul extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Istanbul",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Istanbul;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXN0YW5idWwuN2Q3NWJlMDMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=