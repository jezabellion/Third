import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, y as identity, z as validate_each_argument, B as Bonkers, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, A as add_render_callback, C as create_in_transition, w as transition_out, x as destroy_component, D as destroy_each } from './client.368af34c.js';
import { T as Truman } from './Truman.99a1caee.js';

/* src/components/Blurb.svelte generated by Svelte v3.20.1 */

const file = "src/components/Blurb.svelte";

function create_fragment(ctx) {
	let div;
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;
	let t3;
	let p2;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			p0 = element("p");
			t0 = text("Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			t1 = space();
			p1 = element("p");
			t2 = text("* * *");
			t3 = space();
			p2 = element("p");
			t4 = text("Andrea & Jeremy");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Buying the right telescope to take your love of astronomy to the next level is a big next step in the propsition");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p1 = claim_element(div_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t2 = claim_text(p1_nodes, "* * *");
			p1_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			p2 = claim_element(div_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t4 = claim_text(p2_nodes, "Andrea & Jeremy");
			p2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p0, "class", "svelte-1gn6av2");
			add_location(p0, file, 15, 2, 348);
			attr_dev(p1, "class", "svelte-1gn6av2");
			add_location(p1, file, 16, 2, 470);
			attr_dev(p2, "class", "svelte-1gn6av2");
			add_location(p2, file, 17, 2, 485);
			attr_dev(div, "class", "container blurb svelte-1gn6av2");
			add_location(div, file, 14, 0, 316);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, t0);
			append_dev(div, t1);
			append_dev(div, p1);
			append_dev(p1, t2);
			append_dev(div, t3);
			append_dev(div, p2);
			append_dev(p2, t4);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Blurb> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Blurb", $$slots, []);
	return [];
}

class Blurb extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Blurb",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/ChapterHeader.svelte generated by Svelte v3.20.1 */

const file$1 = "src/components/ChapterHeader.svelte";

function create_fragment$1(ctx) {
	let div1;
	let div0;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text("Aït Benhaddou");
			t1 = space();
			p = element("p");
			t2 = text("* * *");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Aït Benhaddou");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "* * *");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-p4xdmg");
			add_location(h2, file$1, 18, 4, 416);
			attr_dev(p, "class", "svelte-p4xdmg");
			add_location(p, file$1, 19, 4, 443);
			attr_dev(div0, "class", "chapter-header svelte-p4xdmg");
			add_location(div0, file$1, 17, 2, 383);
			attr_dev(div1, "class", "container");
			add_location(div1, file$1, 16, 0, 357);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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

function instance$1($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ChapterHeader> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("ChapterHeader", $$slots, []);
	return [];
}

class ChapterHeader extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ChapterHeader",
			options,
			id: create_fragment$1.name
		});
	}
}

function fade(node, { delay = 0, duration = 400, easing = identity }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}

var test = 'ItReallyWorked';

const photosOne = [
	{ src: 'images/bbb.jpg', alt: 'whatever' },
	{ src: 'images/bbb.jpg', alt: 'yup' },
	{ src: 'images/bbb.jpg', alt: 'new' }
];

const photosTwo = [
  { src: 'images/ddd.jpg', alt: 'stuff' },
  { src: 'images/eee.jpg', alt: 'shit' },
  { src: 'images/aaa.jpg', alt: 'shit' },
  { src: 'images/bbb.jpg', alt: 'shit' }
];

/* src/routes/travel.svelte generated by Svelte v3.20.1 */
const file$2 = "src/routes/travel.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	child_ctx[6] = i;
	return child_ctx;
}

// (63:0) {#each photosOne as photo, i}
function create_each_block_1(ctx) {
	let div;
	let figure;
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			div = element("div");
			figure = element("figure");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			figure = claim_element(div_nodes, "FIGURE", {});
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { src: true, alt: true, class: true });
			figure_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*photo*/ ctx[4].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*photo*/ ctx[4].alt);
			attr_dev(img, "class", "svelte-2ikc7i");
			add_location(img, file$2, 64, 11, 1411);
			add_location(figure, file$2, 64, 3, 1403);
			attr_dev(div, "class", "container image-gallery svelte-2ikc7i");
			add_location(div, file$2, 63, 1, 1362);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, figure);
			append_dev(figure, img);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(63:0) {#each photosOne as photo, i}",
		ctx
	});

	return block;
}

// (71:0) {#each photosTwo as photo, i}
function create_each_block(ctx) {
	let div;
	let figure;
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			div = element("div");
			figure = element("figure");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			figure = claim_element(div_nodes, "FIGURE", {});
			var figure_nodes = children(figure);
			img = claim_element(figure_nodes, "IMG", { src: true, alt: true, class: true });
			figure_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*photo*/ ctx[4].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*photo*/ ctx[4].alt);
			attr_dev(img, "class", "svelte-2ikc7i");
			add_location(img, file$2, 72, 11, 1573);
			add_location(figure, file$2, 72, 3, 1565);
			attr_dev(div, "class", "container image-gallery svelte-2ikc7i");
			add_location(div, file$2, 71, 1, 1524);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, figure);
			append_dev(figure, img);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(71:0) {#each photosTwo as photo, i}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let title_value;
	let t0;
	let section;
	let t1;
	let div1;
	let div0;
	let h1;
	let t2;
	let h1_intro;
	let section_intro;
	let t3;
	let div2;
	let p;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let t9;
	let current;
	document.title = title_value = /*destination*/ ctx[0];
	const truman = new Truman({ $$inline: true });
	const blurb = new Blurb({ $$inline: true });
	let each_value_1 = photosOne;
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const chapterheader = new ChapterHeader({ $$inline: true });
	let each_value = photosTwo;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const bonkers = new Bonkers({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			create_component(truman.$$.fragment);
			t1 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t2 = text(/*destination*/ ctx[0]);
			t3 = space();
			div2 = element("div");
			p = element("p");
			t4 = text(test);
			t5 = space();
			create_component(blurb.$$.fragment);
			t6 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t7 = space();
			create_component(chapterheader.$$.fragment);
			t8 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t9 = space();
			create_component(bonkers.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-wp5x8y\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			claim_component(truman.$$.fragment, section_nodes);
			t1 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, /*destination*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p = claim_element(div2_nodes, "P", {});
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, test);
			p_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			claim_component(blurb.$$.fragment, nodes);
			t6 = claim_space(nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t7 = claim_space(nodes);
			claim_component(chapterheader.$$.fragment, nodes);
			t8 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t9 = claim_space(nodes);
			claim_component(bonkers.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-2ikc7i");
			add_location(h1, file$2, 49, 6, 1186);
			attr_dev(div0, "class", "container");
			add_location(div0, file$2, 48, 4, 1156);
			attr_dev(div1, "class", "hero-body");
			add_location(div1, file$2, 47, 2, 1128);
			attr_dev(section, "class", "hero is-link is-fullheight svelte-2ikc7i");
			add_location(section, file$2, 43, 0, 1037);
			add_location(p, file$2, 56, 1, 1298);
			attr_dev(div2, "class", "container");
			add_location(div2, file$2, 55, 0, 1273);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			mount_component(truman, section, null);
			append_dev(section, t1);
			append_dev(section, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, p);
			append_dev(p, t4);
			insert_dev(target, t5, anchor);
			mount_component(blurb, target, anchor);
			insert_dev(target, t6, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t7, anchor);
			mount_component(chapterheader, target, anchor);
			insert_dev(target, t8, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t9, anchor);
			mount_component(bonkers, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*destination*/ 1) && title_value !== (title_value = /*destination*/ ctx[0])) {
				document.title = title_value;
			}

			if (dirty & /*photosOne*/ 0) {
				each_value_1 = photosOne;
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t7.parentNode, t7);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*photosTwo*/ 0) {
				each_value = photosTwo;
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t9.parentNode, t9);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(truman.$$.fragment, local);

			if (!h1_intro) {
				add_render_callback(() => {
					h1_intro = create_in_transition(h1, fade, { duration: 2000 });
					h1_intro.start();
				});
			}

			if (!section_intro) {
				add_render_callback(() => {
					section_intro = create_in_transition(section, fade, { duration: 500 });
					section_intro.start();
				});
			}

			transition_in(blurb.$$.fragment, local);
			transition_in(chapterheader.$$.fragment, local);
			transition_in(bonkers.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(truman.$$.fragment, local);
			transition_out(blurb.$$.fragment, local);
			transition_out(chapterheader.$$.fragment, local);
			transition_out(bonkers.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(truman);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t5);
			destroy_component(blurb, detaching);
			if (detaching) detach_dev(t6);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t7);
			destroy_component(chapterheader, detaching);
			if (detaching) detach_dev(t8);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t9);
			destroy_component(bonkers, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let visible = true;
	let destination = "Morocco";
	let chapterOne = "Aït Benhaddou";
	let chapterTwo = "Erg Chebbi";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Travel> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Travel", $$slots, []);

	$$self.$capture_state = () => ({
		Bonkers,
		Truman,
		Blurb,
		ChapterHeader,
		fade,
		test,
		photosOne,
		photosTwo,
		visible,
		destination,
		chapterOne,
		chapterTwo
	});

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) visible = $$props.visible;
		if ("destination" in $$props) $$invalidate(0, destination = $$props.destination);
		if ("chapterOne" in $$props) chapterOne = $$props.chapterOne;
		if ("chapterTwo" in $$props) chapterTwo = $$props.chapterTwo;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [destination];
}

class Travel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Travel",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Travel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVsLmQ2MTcxYjUzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL3RyYW5zaXRpb24vaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy90ZXN0LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9tb3JvY2NvLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy90cmF2ZWwuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1YmljSW5PdXQsIGxpbmVhciwgY3ViaWNPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuaW1wb3J0IHsgaXNfZnVuY3Rpb24sIGFzc2lnbiB9IGZyb20gJy4uL2ludGVybmFsJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IGYgPSBzdHlsZS5maWx0ZXIgPT09ICdub25lJyA/ICcnIDogc3R5bGUuZmlsdGVyO1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX07IGZpbHRlcjogJHtmfSBibHVyKCR7dSAqIGFtb3VudH1weCk7YFxuICAgIH07XG59XG5mdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gbGluZWFyIH0pIHtcbiAgICBjb25zdCBvID0gK2dldENvbXB1dGVkU3R5bGUobm9kZSkub3BhY2l0eTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcbiAgICB9O1xufVxuZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpO1xuICAgIGNvbnN0IHBhZGRpbmdfdG9wID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKTtcbiAgICBjb25zdCBwYWRkaW5nX2JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgY29uc3QgbWFyZ2luX3RvcCA9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKTtcbiAgICBjb25zdCBtYXJnaW5fYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIGNvbnN0IGJvcmRlcl90b3Bfd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgICBjb25zdCBib3JkZXJfYm90dG9tX3dpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICAgIGBvcGFjaXR5OiAke01hdGgubWluKHQgKiAyMCwgMSkgKiBvcGFjaXR5fTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6ICR7dCAqIGhlaWdodH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLXRvcDogJHt0ICogcGFkZGluZ190b3B9cHg7YCArXG4gICAgICAgICAgICBgcGFkZGluZy1ib3R0b206ICR7dCAqIHBhZGRpbmdfYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYG1hcmdpbi10b3A6ICR7dCAqIG1hcmdpbl90b3B9cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLWJvdHRvbTogJHt0ICogbWFyZ2luX2JvdHRvbX1weDtgICtcbiAgICAgICAgICAgIGBib3JkZXItdG9wLXdpZHRoOiAke3QgKiBib3JkZXJfdG9wX3dpZHRofXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci1ib3R0b20td2lkdGg6ICR7dCAqIGJvcmRlcl9ib3R0b21fd2lkdGh9cHg7YFxuICAgIH07XG59XG5mdW5jdGlvbiBzY2FsZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCBzdGFydCA9IDAsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNkID0gMSAtIHN0YXJ0O1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gc2NhbGUoJHsxIC0gKHNkICogdSl9KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1cblx0XHRgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRyYXcobm9kZSwgeyBkZWxheSA9IDAsIHNwZWVkLCBkdXJhdGlvbiwgZWFzaW5nID0gY3ViaWNJbk91dCB9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsImV4cG9ydCBkZWZhdWx0ICdJdFJlYWxseVdvcmtlZCc7XG4iLCJleHBvcnQgY29uc3QgcGhvdG9zT25lID0gW1xuXHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAnd2hhdGV2ZXInIH0sXG5cdHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICd5dXAnIH0sXG5cdHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICduZXcnIH1cbl07XG5cbmV4cG9ydCBjb25zdCBwaG90b3NUd28gPSBbXG4gIHsgc3JjOiAnaW1hZ2VzL2RkZC5qcGcnLCBhbHQ6ICdzdHVmZicgfSxcbiAgeyBzcmM6ICdpbWFnZXMvZWVlLmpwZycsIGFsdDogJ3NoaXQnIH0sXG4gIHsgc3JjOiAnaW1hZ2VzL2FhYS5qcGcnLCBhbHQ6ICdzaGl0JyB9LFxuICB7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAnc2hpdCcgfVxuXTtcbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBCb25rZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9ua2Vycy5zdmVsdGUnO1xuXHRpbXBvcnQgVHJ1bWFuIGZyb20gJy4uL2NvbXBvbmVudHMvVHJ1bWFuLnN2ZWx0ZSc7XG5cdGltcG9ydCBCbHVyYiBmcm9tICcuLi9jb21wb25lbnRzL0JsdXJiLnN2ZWx0ZSc7XG5cdGltcG9ydCBDaGFwdGVySGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUnO1xuXHRpbXBvcnQgeyBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuXHQvLyBpbXBvcnQgcGhvdG9zT25lIGZyb20gJy4vdGVzdC5qcydcblx0aW1wb3J0IHRlc3QgZnJvbSAnLi90ZXN0LmpzJztcblx0aW1wb3J0IHsgcGhvdG9zT25lIH0gZnJvbSAnLi9tb3JvY2NvLmpzJztcblx0aW1wb3J0IHsgcGhvdG9zVHdvIH0gZnJvbSAnLi9tb3JvY2NvLmpzJztcblxuXHRsZXQgdmlzaWJsZSA9IHRydWU7XG5cdGxldCBkZXN0aW5hdGlvbiA9ICdNb3JvY2NvJztcblx0bGV0IGNoYXB0ZXJPbmUgPSAnQcOvdCBCZW5oYWRkb3UnO1xuXHRsZXQgY2hhcHRlclR3byA9IFx0J0VyZyBDaGViYmknO1xuXG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBtZWRpYT1cInNjcmVlblwiIGxhbmc9XCJzY3NzXCI+XG5cdGgxIHtcblx0XHRmb250LWZhbWlseTogJ0VuZ2FnZW1lbnQnLCBjdXJzaXZlO1xuXHRcdGZvbnQtc2l6ZTogOHJlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHR9XG5cdC5oZXJvIHtcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy9tb3JvY2NvLXRodW1iLmpwZycpO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcblx0fVxuXG5cdC5pbWFnZS1nYWxsZXJ5IGZpZ3VyZSBpbWcge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbjwvc3R5bGU+XG5cblxuPCEtLSBQYWdlIHN0YXJ0cyAtLT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e2Rlc3RpbmF0aW9ufTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbiBpbjpmYWRlID1cInt7IGR1cmF0aW9uOiA1MDAgfX1cIiBjbGFzcz1cImhlcm8gaXMtbGluayBpcy1mdWxsaGVpZ2h0XCI+XG5cblx0PFRydW1hbi8+XG5cbiAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBpbjpmYWRlPVwie3sgZHVyYXRpb246IDIwMDAgfX1cIj57ZGVzdGluYXRpb259PC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG5cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHQ8cD57dGVzdH08L3A+XG48L2Rpdj5cblxuXG48Qmx1cmIvPlxuXG57I2VhY2ggcGhvdG9zT25lIGFzIHBob3RvLCBpfVxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGltYWdlLWdhbGxlcnlcIj5cblx0XHRcdDxmaWd1cmU+PGltZyBzcmM9e3Bob3RvLnNyY30gYWx0PXtwaG90by5hbHR9PjwvZmlndXJlPlxuXHQ8L2Rpdj5cbnsvZWFjaH1cblxuPENoYXB0ZXJIZWFkZXIvPlxuXG57I2VhY2ggcGhvdG9zVHdvIGFzIHBob3RvLCBpfVxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGltYWdlLWdhbGxlcnlcIj5cblx0XHRcdDxmaWd1cmU+PGltZyBzcmM9e3Bob3RvLnNyY30gYWx0PXtwaG90by5hbHR9PjwvZmlndXJlPlxuXHQ8L2Rpdj5cbnsvZWFjaH1cblxuPEJvbmtlcnMvPlxuIl0sIm5hbWVzIjpbImxpbmVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHQSxRQUFNLEVBQUUsRUFBRTtBQUNwRSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQzlDLElBQUksT0FBTztBQUNYLFFBQVEsS0FBSztBQUNiLFFBQVEsUUFBUTtBQUNoQixRQUFRLE1BQU07QUFDZCxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLEtBQUssQ0FBQztBQUNOLENBQUM7O0FDbERELFdBQWUsZ0JBQWdCLENBQUM7O0FDQXpCLE1BQU0sU0FBUyxHQUFHO0FBQ3pCLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRTtBQUMzQyxDQUFDLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUU7QUFDdEMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3RDLENBQUMsQ0FBQztBQUNGO0FBQ0EsQUFBTyxNQUFNLFNBQVMsR0FBRztBQUN6QixFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDekMsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQ3hDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUN4QyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDeEMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENDcURtQixHQUFLLElBQUMsR0FBRztrREFBTyxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FRekIsR0FBSyxJQUFDLEdBQUc7a0RBQU8sR0FBSyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQWhDckMsR0FBVzs7O29CQXNCYixTQUFTOzs7O2tDQUFkLE1BQUk7Ozs7O2tCQVFDLFNBQVM7Ozs7Z0NBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OzZCQXJCb0MsR0FBVzs7OzthQU9oRCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FQaUMsR0FBVzs7Ozs7Ozs7Ozs0QkFPaEQsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpR0FoQkEsR0FBVzs7Ozs7bUJBc0JiLFNBQVM7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7O2lCQVFDLFNBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7aURBckJnQixRQUFRLEVBQUUsSUFBSTs7Ozs7OzsyREFOZCxRQUFRLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBaEM5QixPQUFPLEdBQUcsSUFBSTtLQUNkLFdBQVcsR0FBRyxTQUFTO0tBQ3ZCLFVBQVUsR0FBRyxlQUFlO0tBQzVCLFVBQVUsR0FBSSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
