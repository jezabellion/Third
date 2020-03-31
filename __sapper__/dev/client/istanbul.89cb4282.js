import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, B as Bonkers, v as validate_slots, e as element, o as create_component, a as space, t as text, f as claim_element, g as children, p as claim_component, c as claim_space, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, r as mount_component, m as append_dev, n as noop, u as transition_in, w as transition_out, x as destroy_component } from './client.142dd2eb.js';
import { T as Truman } from './Truman.0adae36f.js';

/* src/routes/istanbul.svelte generated by Svelte v3.20.1 */
const file = "src/routes/istanbul.svelte";

function create_fragment(ctx) {
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
			add_location(h1, file, 53, 6, 2708);
			attr_dev(div0, "class", "container");
			add_location(div0, file, 52, 4, 2678);
			attr_dev(div1, "class", "hero-body");
			add_location(div1, file, 51, 2, 2650);
			attr_dev(section, "class", "hero is-link is-fullheight svelte-fpa6fq");
			add_location(section, file, 47, 0, 2591);
			attr_dev(p0, "class", "svelte-fpa6fq");
			add_location(p0, file, 62, 2, 2793);
			attr_dev(p1, "class", "svelte-fpa6fq");
			add_location(p1, file, 63, 2, 2915);
			attr_dev(p2, "class", "svelte-fpa6fq");
			add_location(p2, file, 64, 2, 2930);
			attr_dev(div2, "class", "container blurb svelte-fpa6fq");
			add_location(div2, file, 61, 0, 2761);
			attr_dev(img0, "alt", "handsome man");
			if (img0.src !== (img0_src_value = "images/bbb.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "class", "svelte-fpa6fq");
			add_location(img0, file, 68, 10, 3009);
			add_location(figure0, file, 68, 2, 3001);
			attr_dev(div3, "class", "container image-gallery svelte-fpa6fq");
			add_location(div3, file, 67, 0, 2961);
			attr_dev(h2, "class", "svelte-fpa6fq");
			add_location(h2, file, 73, 4, 3131);
			attr_dev(p3, "class", "svelte-fpa6fq");
			add_location(p3, file, 74, 4, 3158);
			attr_dev(div4, "class", "chapter-header svelte-fpa6fq");
			add_location(div4, file, 72, 2, 3098);
			attr_dev(div5, "class", "container");
			add_location(div5, file, 71, 0, 3072);
			attr_dev(img1, "alt", "handsome man");
			if (img1.src !== (img1_src_value = "images/aaa.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "class", "svelte-fpa6fq");
			add_location(img1, file, 79, 10, 3236);
			add_location(figure1, file, 79, 2, 3228);
			attr_dev(img2, "alt", "handsome man");
			if (img2.src !== (img2_src_value = "images/bbb.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "class", "svelte-fpa6fq");
			add_location(img2, file, 80, 10, 3301);
			add_location(figure2, file, 80, 2, 3293);
			attr_dev(img3, "alt", "handsome man");
			if (img3.src !== (img3_src_value = "images/ccc.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "class", "svelte-fpa6fq");
			add_location(img3, file, 81, 10, 3366);
			add_location(figure3, file, 81, 2, 3358);
			attr_dev(img4, "alt", "handsome man");
			if (img4.src !== (img4_src_value = "images/ddd.jpg")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "class", "svelte-fpa6fq");
			add_location(img4, file, 82, 10, 3431);
			add_location(figure4, file, 82, 2, 3423);
			attr_dev(div6, "class", "container image-gallery svelte-fpa6fq");
			add_location(div6, file, 78, 0, 3188);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Istanbul",
			options,
			id: create_fragment.name
		});
	}
}

export default Istanbul;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXN0YW5idWwuODljYjQyODIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
