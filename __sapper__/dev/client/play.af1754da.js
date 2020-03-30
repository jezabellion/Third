import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, C as validate_each_argument, v as validate_slots, B as Bonkers, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, t as text, a as space, h as claim_text, c as claim_space, F as empty, E as destroy_each } from './client.514c3184.js';

/* src/routes/play.svelte generated by Svelte v3.20.1 */
const file = "src/routes/play.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[6] = list[i];
	child_ctx[8] = i;
	return child_ctx;
}

// (27:0) {#each photosOne as photo, i}
function create_each_block_2(ctx) {
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
			attr_dev(img, "class", "svelte-14vpw1e");
			add_location(img, file, 28, 11, 929);
			add_location(figure, file, 28, 3, 921);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 27, 1, 880);
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
		id: create_each_block_2.name,
		type: "each",
		source: "(27:0) {#each photosOne as photo, i}",
		ctx
	});

	return block;
}

// (40:0) {#each photosTwo as photo, i}
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
			attr_dev(img, "class", "svelte-14vpw1e");
			add_location(img, file, 41, 11, 1190);
			add_location(figure, file, 41, 3, 1182);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 40, 1, 1141);
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
		source: "(40:0) {#each photosTwo as photo, i}",
		ctx
	});

	return block;
}

// (46:0) {#each chapters as chapter}
function create_each_block(ctx) {
	let div1;
	let div0;
	let h2;
	let t0_value = /*chapter*/ ctx[3].two + "";
	let t0;
	let t1;
	let p;
	let t2;
	let t3;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p = element("p");
			t2 = text("* * *");
			t3 = space();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, t0_value);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "* * *");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 48, 4, 1341);
			add_location(p, file, 49, 4, 1368);
			attr_dev(div0, "class", "chapter-header");
			add_location(div0, file, 47, 2, 1308);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 46, 0, 1282);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p);
			append_dev(p, t2);
			append_dev(div1, t3);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(46:0) {#each chapters as chapter}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h2;
	let t1_value = /*chapters*/ ctx[2].one + "";
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let t5;
	let each2_anchor;
	let each_value_2 = /*photosOne*/ ctx[0];
	validate_each_argument(each_value_2);
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = /*photosTwo*/ ctx[1];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*chapters*/ ctx[2];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t1 = text(t1_value);
			t2 = space();
			p = element("p");
			t3 = text("* * *");
			t4 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t5 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each2_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(nodes);
			}

			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, t1_value);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "* * *");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t5 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each2_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 34, 4, 1052);
			add_location(p, file, 35, 4, 1080);
			attr_dev(div0, "class", "chapter-header");
			add_location(div0, file, 33, 2, 1019);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 32, 0, 993);
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(target, anchor);
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t1);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t5, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each2_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*photosOne*/ 1) {
				each_value_2 = /*photosOne*/ ctx[0];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_2(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(t0.parentNode, t0);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_2.length;
			}

			if (dirty & /*photosTwo*/ 2) {
				each_value_1 = /*photosTwo*/ ctx[1];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t5.parentNode, t5);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*chapters*/ 4) {
				each_value = /*chapters*/ ctx[2];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each2_anchor.parentNode, each2_anchor);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			destroy_each(each_blocks_2, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t5);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each2_anchor);
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
	let photosOne = [
		{ src: "images/aaa.jpg", alt: "whatever" },
		{ src: "images/bbb.jpg", alt: "yup" },
		{ src: "images/ccc.jpg", alt: "new" }
	];

	let photosTwo = [
		{ src: "images/ddd.jpg", alt: "stuff" },
		{ src: "images/eee.jpg", alt: "shit" }
	];

	// let chapterOne = 'Aït Benhaddou';
	let chapters = [{ one: "Aït Benhaddou" }, { two: "Erg Chebbi" }];

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Play> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Play", $$slots, []);
	$$self.$capture_state = () => ({ Bonkers, photosOne, photosTwo, chapters });

	$$self.$inject_state = $$props => {
		if ("photosOne" in $$props) $$invalidate(0, photosOne = $$props.photosOne);
		if ("photosTwo" in $$props) $$invalidate(1, photosTwo = $$props.photosTwo);
		if ("chapters" in $$props) $$invalidate(2, chapters = $$props.chapters);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [photosOne, photosTwo, chapters];
}

class Play extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Play",
			options,
			id: create_fragment.name
		});
	}
}

export default Play;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5hZjE3NTRkYS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wbGF5LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG4uaW1hZ2UtZ2FsbGVyeSBmaWd1cmUgaW1nIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBCb25rZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9ua2Vycy5zdmVsdGUnO1xuXHRsZXQgcGhvdG9zT25lID0gW1xuXHRcdHsgc3JjOiAnaW1hZ2VzL2FhYS5qcGcnLCBhbHQ6ICd3aGF0ZXZlcicgfSxcblx0XHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAneXVwJyB9LFxuXHRcdHsgc3JjOiAnaW1hZ2VzL2NjYy5qcGcnLCBhbHQ6ICduZXcnIH1cblx0XTtcbiAgbGV0IHBob3Rvc1R3byA9IFtcbiAgICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gICAgeyBzcmM6ICdpbWFnZXMvZWVlLmpwZycsIGFsdDogJ3NoaXQnIH1cblx0XTtcblx0Ly8gbGV0IGNoYXB0ZXJPbmUgPSAnQcOvdCBCZW5oYWRkb3UnO1xuXHRsZXQgY2hhcHRlcnMgPSBbXG5cdFx0eyBvbmU6ICdBw690IEJlbmhhZGRvdScgfSxcblx0XHR7dHdvOiAnRXJnIENoZWJiaSd9XG5cdF1cbjwvc2NyaXB0PlxuXG5cbnsjZWFjaCBwaG90b3NPbmUgYXMgcGhvdG8sIGl9XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgaW1hZ2UtZ2FsbGVyeVwiPlxuXHRcdFx0PGZpZ3VyZT48aW1nIHNyYz17cGhvdG8uc3JjfSBhbHQ9e3Bob3RvLmFsdH0+PC9maWd1cmU+XG5cdDwvZGl2Plxuey9lYWNofVxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjaGFwdGVyLWhlYWRlclwiPlxuICAgIDxoMj57Y2hhcHRlcnMub25lfTwvaDI+XG4gICAgPHA+KiAqICo8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbnsjZWFjaCBwaG90b3NUd28gYXMgcGhvdG8sIGl9XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgaW1hZ2UtZ2FsbGVyeVwiPlxuXHRcdFx0PGZpZ3VyZT48aW1nIHNyYz17cGhvdG8uc3JjfSBhbHQ9e3Bob3RvLmFsdH0+PC9maWd1cmU+XG5cdDwvZGl2Plxuey9lYWNofVxuXG57I2VhY2ggY2hhcHRlcnMgYXMgY2hhcHRlcn1cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPntjaGFwdGVyLnR3b308L2gyPlxuICAgIDxwPiogKiAqPC9wPlxuICA8L2Rpdj5cbjwvZGl2Plxuey9lYWNofVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0E0QnFCLEdBQUssSUFBQyxHQUFHO2tEQUFPLEdBQUssSUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQWF6QixHQUFLLElBQUMsR0FBRztrREFBTyxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFPckMsR0FBTyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFkWCxHQUFRLElBQUMsR0FBRzs7Ozs7Ozs7a0NBUmQsR0FBUzs7OztrQ0FBZCxNQUFJOzs7O2tDQWFDLEdBQVM7Ozs7a0NBQWQsTUFBSTs7OzsrQkFNQyxHQUFROzs7O2dDQUFiLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBbkJDLEdBQVM7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7O2lDQWFDLEdBQVM7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7OzhCQU1DLEdBQVE7Ozs7K0JBQWIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTNDRCxTQUFTO0lBQ1YsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxVQUFVO0lBQ3RDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSztJQUNqQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUs7OztLQUUvQixTQUFTO0lBQ1QsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxPQUFPO0lBQ25DLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsTUFBTTs7OztLQUduQyxRQUFRLE1BQ1QsR0FBRyxFQUFFLGVBQWUsTUFDckIsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
