import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as create_component, p as claim_component, r as mount_component, u as transition_in, y as add_render_callback, z as create_in_transition, w as transition_out, x as destroy_component, A as identity, C as validate_each_argument, B as Bonkers, q as query_selector_all, D as destroy_each } from './client.971f9928.js';
import { T as Truman } from './Truman.ed3f33c7.js';

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

/* src/components/TravelHero.svelte generated by Svelte v3.20.1 */
const file$2 = "src/components/TravelHero.svelte";

function create_fragment$2(ctx) {
	let section;
	let t0;
	let div1;
	let div0;
	let h1;
	let t1;
	let h1_intro;
	let section_intro;
	let current;
	const truman = new Truman({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			create_component(truman.$$.fragment);
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text(destination);
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
			t1 = claim_text(h1_nodes, destination);
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-fkqvyk");
			add_location(h1, file$2, 26, 6, 1293);
			attr_dev(div0, "class", "container");
			add_location(div0, file$2, 25, 4, 1263);
			attr_dev(div1, "class", "hero-body");
			add_location(div1, file$2, 24, 2, 1235);
			attr_dev(section, "class", "hero is-link is-fullheight svelte-fkqvyk");
			add_location(section, file$2, 20, 0, 1144);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			mount_component(truman, section, null);
			append_dev(section, t0);
			append_dev(section, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			current = true;
		},
		p: noop,
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

			current = true;
		},
		o: function outro(local) {
			transition_out(truman.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(truman);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TravelHero> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("TravelHero", $$slots, []);
	$$self.$capture_state = () => ({ Truman });
	return [];
}

class TravelHero extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TravelHero",
			options,
			id: create_fragment$2.name
		});
	}
}

function fade$1(node, { delay = 0, duration = 400, easing = identity }) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}

/* src/routes/travel.svelte generated by Svelte v3.20.1 */
const file$3 = "src/routes/travel.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (42:0) {#each photosOne as photo, i}
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
			if (img.src !== (img_src_value = /*photo*/ ctx[6].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*photo*/ ctx[6].alt);
			attr_dev(img, "class", "svelte-1806rlb");
			add_location(img, file$3, 43, 11, 1063);
			add_location(figure, file$3, 43, 3, 1055);
			attr_dev(div, "class", "container image-gallery svelte-1806rlb");
			add_location(div, file$3, 42, 1, 1014);
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
		source: "(42:0) {#each photosOne as photo, i}",
		ctx
	});

	return block;
}

// (50:0) {#each photosTwo as photo, i}
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
			if (img.src !== (img_src_value = /*photo*/ ctx[6].src)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*photo*/ ctx[6].alt);
			attr_dev(img, "class", "svelte-1806rlb");
			add_location(img, file$3, 51, 11, 1225);
			add_location(figure, file$3, 51, 3, 1217);
			attr_dev(div, "class", "container image-gallery svelte-1806rlb");
			add_location(div, file$3, 50, 1, 1176);
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
		source: "(50:0) {#each photosTwo as photo, i}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let title_value;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let current;
	document.title = title_value = /*destination*/ ctx[0];
	const travelhero = new TravelHero({ $$inline: true });
	const blurb = new Blurb({ $$inline: true });
	let each_value_1 = /*photosOne*/ ctx[1];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const chapterheader = new ChapterHeader({ $$inline: true });
	let each_value = /*photosTwo*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const bonkers = new Bonkers({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(travelhero.$$.fragment);
			t1 = space();
			create_component(blurb.$$.fragment);
			t2 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t3 = space();
			create_component(chapterheader.$$.fragment);
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			create_component(bonkers.$$.fragment);
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-wp5x8y\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(travelhero.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(blurb.$$.fragment, nodes);
			t2 = claim_space(nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t3 = claim_space(nodes);
			claim_component(chapterheader.$$.fragment, nodes);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t5 = claim_space(nodes);
			claim_component(bonkers.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(travelhero, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(blurb, target, anchor);
			insert_dev(target, t2, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t3, anchor);
			mount_component(chapterheader, target, anchor);
			insert_dev(target, t4, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t5, anchor);
			mount_component(bonkers, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*destination*/ 1) && title_value !== (title_value = /*destination*/ ctx[0])) {
				document.title = title_value;
			}

			if (dirty & /*photosOne*/ 2) {
				each_value_1 = /*photosOne*/ ctx[1];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t3.parentNode, t3);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*photosTwo*/ 4) {
				each_value = /*photosTwo*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(t5.parentNode, t5);
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
			transition_in(travelhero.$$.fragment, local);
			transition_in(blurb.$$.fragment, local);
			transition_in(chapterheader.$$.fragment, local);
			transition_in(bonkers.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(travelhero.$$.fragment, local);
			transition_out(blurb.$$.fragment, local);
			transition_out(chapterheader.$$.fragment, local);
			transition_out(bonkers.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(travelhero, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(blurb, detaching);
			if (detaching) detach_dev(t2);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(chapterheader, detaching);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(bonkers, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let visible = true;
	let destination = "Morocco";
	let chapterOne = "Aït Benhaddou";
	let chapterTwo = "Erg Chebbi";

	let photosOne = [
		{ src: "images/aaa.jpg", alt: "whatever" },
		{ src: "images/bbb.jpg", alt: "yup" },
		{ src: "images/ccc.jpg", alt: "new" }
	];

	let photosTwo = [
		{ src: "images/ddd.jpg", alt: "stuff" },
		{ src: "images/eee.jpg", alt: "shit" }
	];

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
		TravelHero,
		fade: fade$1,
		visible,
		destination,
		chapterOne,
		chapterTwo,
		photosOne,
		photosTwo
	});

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) visible = $$props.visible;
		if ("destination" in $$props) $$invalidate(0, destination = $$props.destination);
		if ("chapterOne" in $$props) chapterOne = $$props.chapterOne;
		if ("chapterTwo" in $$props) chapterTwo = $$props.chapterTwo;
		if ("photosOne" in $$props) $$invalidate(1, photosOne = $$props.photosOne);
		if ("photosTwo" in $$props) $$invalidate(2, photosTwo = $$props.photosTwo);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [destination, photosOne, photosTwo];
}

class Travel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Travel",
			options,
			id: create_fragment$3.name
		});
	}
}

export default Travel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhdmVsLjMwNTQwMmUxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmF2ZWxIZXJvLnN2ZWx0ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3RyYXZlbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IFRydW1hbiBmcm9tICcuLi9jb21wb25lbnRzL1RydW1hbi5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiAnRW5nYWdlbWVudCcsIGN1cnNpdmU7XG4gICAgZm9udC1zaXplOiA4cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmhlcm8ge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL21vcm9jY28tdGh1bWIuanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG48L3N0eWxlPlxuXG48c2VjdGlvbiBpbjpmYWRlID1cInt7IGR1cmF0aW9uOiA1MDAgfX1cIiBjbGFzcz1cImhlcm8gaXMtbGluayBpcy1mdWxsaGVpZ2h0XCI+XG5cblx0PFRydW1hbi8+XG5cbiAgPGRpdiBjbGFzcz1cImhlcm8tYm9keVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMSBpbjpmYWRlPVwie3sgZHVyYXRpb246IDIwMDAgfX1cIj57ZGVzdGluYXRpb259PC9oMT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBjdWJpY0luT3V0LCBsaW5lYXIsIGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nJztcbmltcG9ydCB7IGlzX2Z1bmN0aW9uLCBhc3NpZ24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cblxuZnVuY3Rpb24gYmx1cihub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljSW5PdXQsIGFtb3VudCA9IDUsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCBmID0gc3R5bGUuZmlsdGVyID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLmZpbHRlcjtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGBvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9OyBmaWx0ZXI6ICR7Zn0gYmx1cigke3UgKiBhbW91bnR9cHgpO2BcbiAgICB9O1xufVxuZnVuY3Rpb24gZmFkZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGxpbmVhciB9KSB7XG4gICAgY29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3BhY2l0eTogJHt0ICogb31gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHsoMSAtIHQpICogeH1weCwgJHsoMSAtIHQpICogeX1weCk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9YFxuICAgIH07XG59XG5mdW5jdGlvbiBzbGlkZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0IH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3Qgb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlRmxvYXQoc3R5bGUuaGVpZ2h0KTtcbiAgICBjb25zdCBwYWRkaW5nX3RvcCA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCk7XG4gICAgY29uc3QgcGFkZGluZ19ib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pO1xuICAgIGNvbnN0IG1hcmdpbl90b3AgPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpblRvcCk7XG4gICAgY29uc3QgbWFyZ2luX2JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luQm90dG9tKTtcbiAgICBjb25zdCBib3JkZXJfdG9wX3dpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJUb3BXaWR0aCk7XG4gICAgY29uc3QgYm9yZGVyX2JvdHRvbV93aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IHQgPT4gYG92ZXJmbG93OiBoaWRkZW47YCArXG4gICAgICAgICAgICBgb3BhY2l0eTogJHtNYXRoLm1pbih0ICogMjAsIDEpICogb3BhY2l0eX07YCArXG4gICAgICAgICAgICBgaGVpZ2h0OiAke3QgKiBoZWlnaHR9cHg7YCArXG4gICAgICAgICAgICBgcGFkZGluZy10b3A6ICR7dCAqIHBhZGRpbmdfdG9wfXB4O2AgK1xuICAgICAgICAgICAgYHBhZGRpbmctYm90dG9tOiAke3QgKiBwYWRkaW5nX2JvdHRvbX1weDtgICtcbiAgICAgICAgICAgIGBtYXJnaW4tdG9wOiAke3QgKiBtYXJnaW5fdG9wfXB4O2AgK1xuICAgICAgICAgICAgYG1hcmdpbi1ib3R0b206ICR7dCAqIG1hcmdpbl9ib3R0b219cHg7YCArXG4gICAgICAgICAgICBgYm9yZGVyLXRvcC13aWR0aDogJHt0ICogYm9yZGVyX3RvcF93aWR0aH1weDtgICtcbiAgICAgICAgICAgIGBib3JkZXItYm90dG9tLXdpZHRoOiAke3QgKiBib3JkZXJfYm90dG9tX3dpZHRofXB4O2BcbiAgICB9O1xufVxuZnVuY3Rpb24gc2NhbGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBjdWJpY091dCwgc3RhcnQgPSAwLCBvcGFjaXR5ID0gMCB9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCBzZCA9IDEgLSBzdGFydDtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHNjYWxlKCR7MSAtIChzZCAqIHUpfSk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9XG5cdFx0YFxuICAgIH07XG59XG5mdW5jdGlvbiBkcmF3KG5vZGUsIHsgZGVsYXkgPSAwLCBzcGVlZCwgZHVyYXRpb24sIGVhc2luZyA9IGN1YmljSW5PdXQgfSkge1xuICAgIGNvbnN0IGxlbiA9IG5vZGUuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICBpZiAoZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc3BlZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZHVyYXRpb24gPSA4MDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IGxlbiAvIHNwZWVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uKGxlbik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6ICh0LCB1KSA9PiBgc3Ryb2tlLWRhc2hhcnJheTogJHt0ICogbGVufSAke3UgKiBsZW59YFxuICAgIH07XG59XG5mdW5jdGlvbiBjcm9zc2ZhZGUoX2EpIHtcbiAgICB2YXIgeyBmYWxsYmFjayB9ID0gX2EsIGRlZmF1bHRzID0gX19yZXN0KF9hLCBbXCJmYWxsYmFja1wiXSk7XG4gICAgY29uc3QgdG9fcmVjZWl2ZSA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCB0b19zZW5kID0gbmV3IE1hcCgpO1xuICAgIGZ1bmN0aW9uIGNyb3NzZmFkZShmcm9tLCBub2RlLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gZCA9PiBNYXRoLnNxcnQoZCkgKiAzMCwgZWFzaW5nID0gY3ViaWNPdXQgfSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgcGFyYW1zKTtcbiAgICAgICAgY29uc3QgdG8gPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBkeCA9IGZyb20ubGVmdCAtIHRvLmxlZnQ7XG4gICAgICAgIGNvbnN0IGR5ID0gZnJvbS50b3AgLSB0by50b3A7XG4gICAgICAgIGNvbnN0IGR3ID0gZnJvbS53aWR0aCAvIHRvLndpZHRoO1xuICAgICAgICBjb25zdCBkaCA9IGZyb20uaGVpZ2h0IC8gdG8uaGVpZ2h0O1xuICAgICAgICBjb25zdCBkID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWxheSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBpc19mdW5jdGlvbihkdXJhdGlvbikgPyBkdXJhdGlvbihkKSA6IGR1cmF0aW9uLFxuICAgICAgICAgICAgZWFzaW5nLFxuICAgICAgICAgICAgY3NzOiAodCwgdSkgPT4gYFxuXHRcdFx0XHRvcGFjaXR5OiAke3QgKiBvcGFjaXR5fTtcblx0XHRcdFx0dHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG5cdFx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgke3UgKiBkeH1weCwke3UgKiBkeX1weCkgc2NhbGUoJHt0ICsgKDEgLSB0KSAqIGR3fSwgJHt0ICsgKDEgLSB0KSAqIGRofSk7XG5cdFx0XHRgXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRyYW5zaXRpb24oaXRlbXMsIGNvdW50ZXJwYXJ0cywgaW50cm8pIHtcbiAgICAgICAgcmV0dXJuIChub2RlLCBwYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGl0ZW1zLnNldChwYXJhbXMua2V5LCB7XG4gICAgICAgICAgICAgICAgcmVjdDogbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVycGFydHMuaGFzKHBhcmFtcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVjdCB9ID0gY291bnRlcnBhcnRzLmdldChwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcnBhcnRzLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyb3NzZmFkZShyZWN0LCBub2RlLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbm9kZSBpcyBkaXNhcHBlYXJpbmcgYWx0b2dldGhlclxuICAgICAgICAgICAgICAgIC8vIChpLmUuIHdhc24ndCBjbGFpbWVkIGJ5IHRoZSBvdGhlciBsaXN0KVxuICAgICAgICAgICAgICAgIC8vIHRoZW4gd2UgbmVlZCB0byBzdXBwbHkgYW4gb3V0cm9cbiAgICAgICAgICAgICAgICBpdGVtcy5kZWxldGUocGFyYW1zLmtleSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbGxiYWNrICYmIGZhbGxiYWNrKG5vZGUsIHBhcmFtcywgaW50cm8pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgICAgdHJhbnNpdGlvbih0b19zZW5kLCB0b19yZWNlaXZlLCBmYWxzZSksXG4gICAgICAgIHRyYW5zaXRpb24odG9fcmVjZWl2ZSwgdG9fc2VuZCwgdHJ1ZSlcbiAgICBdO1xufVxuXG5leHBvcnQgeyBibHVyLCBjcm9zc2ZhZGUsIGRyYXcsIGZhZGUsIGZseSwgc2NhbGUsIHNsaWRlIH07XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgQm9ua2VycyBmcm9tICcuLi9jb21wb25lbnRzL0JvbmtlcnMuc3ZlbHRlJztcbiAgaW1wb3J0IFRydW1hbiBmcm9tICcuLi9jb21wb25lbnRzL1RydW1hbi5zdmVsdGUnO1xuXHRpbXBvcnQgQmx1cmIgZnJvbSAnLi4vY29tcG9uZW50cy9CbHVyYi5zdmVsdGUnO1xuXHRpbXBvcnQgQ2hhcHRlckhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0NoYXB0ZXJIZWFkZXIuc3ZlbHRlJztcblx0aW1wb3J0IFRyYXZlbEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9UcmF2ZWxIZXJvLnN2ZWx0ZSc7XG5cdGltcG9ydCB7IGZhZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG5cblx0bGV0IHZpc2libGUgPSB0cnVlO1xuXHRsZXQgZGVzdGluYXRpb24gPSAnTW9yb2Njbyc7XG5cdGxldCBjaGFwdGVyT25lID0gJ0HDr3QgQmVuaGFkZG91Jztcblx0bGV0IGNoYXB0ZXJUd28gPSBcdCdFcmcgQ2hlYmJpJztcblxuXHRsZXQgcGhvdG9zT25lID0gW1xuXHRcdHsgc3JjOiAnaW1hZ2VzL2FhYS5qcGcnLCBhbHQ6ICd3aGF0ZXZlcicgfSxcblx0XHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAneXVwJyB9LFxuXHRcdHsgc3JjOiAnaW1hZ2VzL2NjYy5qcGcnLCBhbHQ6ICduZXcnIH1cblx0XTtcbiAgbGV0IHBob3Rvc1R3byA9IFtcbiAgICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gICAgeyBzcmM6ICdpbWFnZXMvZWVlLmpwZycsIGFsdDogJ3NoaXQnIH1cblx0XTtcblxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIG1lZGlhPVwic2NyZWVuXCIgbGFuZz1cInNjc3NcIj5cblx0LmltYWdlLWdhbGxlcnkgZmlndXJlIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuPC9zdHlsZT5cblxuXG48IS0tIFBhZ2Ugc3RhcnRzIC0tPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57ZGVzdGluYXRpb259PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxUcmF2ZWxIZXJvLz5cblxuPEJsdXJiLz5cblxueyNlYWNoIHBob3Rvc09uZSBhcyBwaG90bywgaX1cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBpbWFnZS1nYWxsZXJ5XCI+XG5cdFx0XHQ8ZmlndXJlPjxpbWcgc3JjPXtwaG90by5zcmN9IGFsdD17cGhvdG8uYWx0fT48L2ZpZ3VyZT5cblx0PC9kaXY+XG57L2VhY2h9XG5cbjxDaGFwdGVySGVhZGVyLz5cblxueyNlYWNoIHBob3Rvc1R3byBhcyBwaG90bywgaX1cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBpbWFnZS1nYWxsZXJ5XCI+XG5cdFx0XHQ8ZmlndXJlPjxpbWcgc3JjPXtwaG90by5zcmN9IGFsdD17cGhvdG8uYWx0fT48L2ZpZ3VyZT5cblx0PC9kaXY+XG57L2VhY2h9XG5cbjxCb25rZXJzLz5cbiJdLCJuYW1lcyI6WyJmYWRlIiwibGluZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUEwQjBDLFdBQVc7Ozs7Ozs7Ozs7Ozs7OzZCQUFYLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBQS9CLFFBQVEsRUFBRSxJQUFJOzs7Ozs7OzJEQU5kLFFBQVEsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDc0JuQyxTQUFTQSxNQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBR0MsUUFBTSxFQUFFLEVBQUU7QUFDcEUsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUM5QyxJQUFJLE9BQU87QUFDWCxRQUFRLEtBQUs7QUFDYixRQUFRLFFBQVE7QUFDaEIsUUFBUSxNQUFNO0FBQ2QsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxLQUFLLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENDUG9CLEdBQUssSUFBQyxHQUFHO2tEQUFPLEdBQUssSUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQVF6QixHQUFLLElBQUMsR0FBRztrREFBTyxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBakJyQyxHQUFXOzs7a0NBT2IsR0FBUzs7OztrQ0FBZCxNQUFJOzs7OztnQ0FRQyxHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lHQWZHLEdBQVc7Ozs7O2lDQU9iLEdBQVM7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7OytCQVFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBekNELE9BQU8sR0FBRyxJQUFJO0tBQ2QsV0FBVyxHQUFHLFNBQVM7S0FDdkIsVUFBVSxHQUFHLGVBQWU7S0FDNUIsVUFBVSxHQUFJLFlBQVk7O0tBRTFCLFNBQVM7SUFDVixHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLFVBQVU7SUFDdEMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLO0lBQ2pDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSzs7O0tBRS9CLFNBQVM7SUFDVCxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE9BQU87SUFDbkMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
