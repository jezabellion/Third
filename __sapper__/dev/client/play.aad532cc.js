import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, C as validate_each_argument, v as validate_slots, B as Bonkers, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, a as space, t as text, c as claim_space, h as claim_text, D as destroy_each } from './client.22f23f38.js';
import { C as ChapterHeader } from './ChapterHeader.262db6a1.js';

/* src/routes/play.svelte generated by Svelte v3.20.1 */

const file = "src/routes/play.svelte";

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

// (37:0) {#each photosOne as photo, i}
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
			attr_dev(img, "class", "svelte-14vpw1e");
			add_location(img, file, 38, 11, 1128);
			add_location(figure, file, 38, 3, 1120);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 37, 1, 1079);
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
		source: "(37:0) {#each photosOne as photo, i}",
		ctx
	});

	return block;
}

// (52:0) {#each photosTwo as photo, i}
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
			attr_dev(img, "class", "svelte-14vpw1e");
			add_location(img, file, 53, 11, 1389);
			add_location(figure, file, 53, 3, 1381);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 52, 1, 1340);
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
		source: "(52:0) {#each photosTwo as photo, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div1;
	let div0;
	let h20;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let t5;
	let div3;
	let div2;
	let h21;
	let t6;
	let t7;
	let p1;
	let t8;
	let each_value_1 = /*photosOne*/ ctx[0];
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*photosTwo*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t0 = space();
			div1 = element("div");
			div0 = element("div");
			h20 = element("h2");
			t1 = text(/*chapterOne*/ ctx[2]);
			t2 = space();
			p0 = element("p");
			t3 = text("* * *");
			t4 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			div3 = element("div");
			div2 = element("div");
			h21 = element("h2");
			t6 = text(/*chapterTwo*/ ctx[3]);
			t7 = space();
			p1 = element("p");
			t8 = text("* * *");
			this.h();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", {});
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, /*chapterOne*/ ctx[2]);
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "* * *");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t5 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h21 = claim_element(div2_nodes, "H2", {});
			var h21_nodes = children(h21);
			t6 = claim_text(h21_nodes, /*chapterTwo*/ ctx[3]);
			h21_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			p1 = claim_element(div2_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "* * *");
			p1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h20, file, 44, 4, 1251);
			add_location(p0, file, 45, 4, 1277);
			attr_dev(div0, "class", "chapter-header");
			add_location(div0, file, 43, 2, 1218);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 42, 0, 1192);
			add_location(h21, file, 59, 4, 1512);
			add_location(p1, file, 60, 4, 1538);
			attr_dev(div2, "class", "chapter-header");
			add_location(div2, file, 58, 2, 1479);
			attr_dev(div3, "class", "container");
			add_location(div3, file, 57, 0, 1453);
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h20);
			append_dev(h20, t1);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t5, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, h21);
			append_dev(h21, t6);
			append_dev(div2, t7);
			append_dev(div2, p1);
			append_dev(p1, t8);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*photosOne*/ 1) {
				each_value_1 = /*photosOne*/ ctx[0];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(t0.parentNode, t0);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*photosTwo*/ 2) {
				each_value = /*photosTwo*/ ctx[1];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t4);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div3);
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

	let chapterOne = "Aït Benhaddou";
	let chapterTwo = "Erg Chebbi";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Play> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Play", $$slots, []);

	$$self.$capture_state = () => ({
		Bonkers,
		photosOne,
		photosTwo,
		chapterOne,
		chapterTwo,
		ChapterHeader
	});

	$$self.$inject_state = $$props => {
		if ("photosOne" in $$props) $$invalidate(0, photosOne = $$props.photosOne);
		if ("photosTwo" in $$props) $$invalidate(1, photosTwo = $$props.photosTwo);
		if ("chapterOne" in $$props) $$invalidate(2, chapterOne = $$props.chapterOne);
		if ("chapterTwo" in $$props) $$invalidate(3, chapterTwo = $$props.chapterTwo);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [photosOne, photosTwo, chapterOne, chapterTwo];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5hYWQ1MzJjYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wbGF5LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG4uaW1hZ2UtZ2FsbGVyeSBmaWd1cmUgaW1nIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBCb25rZXJzIGZyb20gJy4uL2NvbXBvbmVudHMvQm9ua2Vycy5zdmVsdGUnO1xuXHRsZXQgcGhvdG9zT25lID0gW1xuXHRcdHsgc3JjOiAnaW1hZ2VzL2FhYS5qcGcnLCBhbHQ6ICd3aGF0ZXZlcicgfSxcblx0XHR7IHNyYzogJ2ltYWdlcy9iYmIuanBnJywgYWx0OiAneXVwJyB9LFxuXHRcdHsgc3JjOiAnaW1hZ2VzL2NjYy5qcGcnLCBhbHQ6ICduZXcnIH1cblx0XTtcbiAgbGV0IHBob3Rvc1R3byA9IFtcbiAgICB7IHNyYzogJ2ltYWdlcy9kZGQuanBnJywgYWx0OiAnc3R1ZmYnIH0sXG4gICAgeyBzcmM6ICdpbWFnZXMvZWVlLmpwZycsIGFsdDogJ3NoaXQnIH1cblx0XTtcblx0bGV0IGNoYXB0ZXJPbmUgPSAnQcOvdCBCZW5oYWRkb3UnO1xuXHRsZXQgY2hhcHRlclR3byA9IFx0J0VyZyBDaGViYmknO1xuXHQvLyBsZXQgY2hhcHRlcnMgPSBbXG5cdC8vIFx0eyBvbmU6ICdBw690IEJlbmhhZGRvdScgfSxcblx0Ly8gXHR7IHR3bzogJ0VyZyBDaGViYmknfVxuXHQvLyBdXG5cdC8vIGltcG9ydCB0ZXN0IGZyb20gJ3Rlc3QuanMnO1xuXG5cdGltcG9ydCBDaGFwdGVySGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2hhcHRlckhlYWRlci5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjwhLS0gPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHQ8cD57dGVzdH08L3A+XG48L2Rpdj4gLS0+XG5cblxuXG5cbnsjZWFjaCBwaG90b3NPbmUgYXMgcGhvdG8sIGl9XG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgaW1hZ2UtZ2FsbGVyeVwiPlxuXHRcdFx0PGZpZ3VyZT48aW1nIHNyYz17cGhvdG8uc3JjfSBhbHQ9e3Bob3RvLmFsdH0+PC9maWd1cmU+XG5cdDwvZGl2Plxuey9lYWNofVxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJjaGFwdGVyLWhlYWRlclwiPlxuICAgIDxoMj57Y2hhcHRlck9uZX08L2gyPlxuICAgIDxwPiogKiAqPC9wPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cblxueyNlYWNoIHBob3Rvc1R3byBhcyBwaG90bywgaX1cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBpbWFnZS1nYWxsZXJ5XCI+XG5cdFx0XHQ8ZmlndXJlPjxpbWcgc3JjPXtwaG90by5zcmN9IGFsdD17cGhvdG8uYWx0fT48L2ZpZ3VyZT5cblx0PC9kaXY+XG57L2VhY2h9XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPntjaGFwdGVyVHdvfTwvaDI+XG4gICAgPHA+KiAqICo8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBc0NxQixHQUFLLElBQUMsR0FBRztrREFBTyxHQUFLLElBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FlekIsR0FBSyxJQUFDLEdBQUc7a0RBQU8sR0FBSyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWpCdkMsR0FBUzs7OztrQ0FBZCxNQUFJOzs7O2dDQWVDLEdBQVM7Ozs7Z0NBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7NEJBUEcsR0FBVTs7Ozs7Ozs7Ozs7Ozs7NEJBZVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQWZWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBZVYsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0F2QlosR0FBUzs7OztpQ0FBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dDQUFKLE1BQUk7Ozs7K0JBZUMsR0FBUzs7OzsrQkFBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FqREQsU0FBUztJQUNWLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsVUFBVTtJQUN0QyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLEtBQUs7SUFDakMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLOzs7S0FFL0IsU0FBUztJQUNULEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsT0FBTztJQUNuQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE1BQU07OztLQUVuQyxVQUFVLEdBQUcsZUFBZTtLQUM1QixVQUFVLEdBQUksWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
