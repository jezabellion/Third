import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, G as validate_each_argument, v as validate_slots, e as element, c as claim_element, b as children, f as detach_dev, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, p as noop, a as space, t as text, g as claim_space, h as claim_text, I as destroy_each } from './client.36f0e121.js';
import { C as ChapterHeader } from './ChapterHeader.096d51da.js';

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

// (36:0) {#each photosOne as photo, i}
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
			add_location(img, file, 37, 11, 1075);
			add_location(figure, file, 37, 3, 1067);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 36, 1, 1026);
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
		source: "(36:0) {#each photosOne as photo, i}",
		ctx
	});

	return block;
}

// (51:0) {#each photosTwo as photo, i}
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
			add_location(img, file, 52, 11, 1336);
			add_location(figure, file, 52, 3, 1328);
			attr_dev(div, "class", "container image-gallery svelte-14vpw1e");
			add_location(div, file, 51, 1, 1287);
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
		source: "(51:0) {#each photosTwo as photo, i}",
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
			add_location(h20, file, 43, 4, 1198);
			add_location(p0, file, 44, 4, 1224);
			attr_dev(div0, "class", "chapter-header");
			add_location(div0, file, 42, 2, 1165);
			attr_dev(div1, "class", "container");
			add_location(div1, file, 41, 0, 1139);
			add_location(h21, file, 58, 4, 1459);
			add_location(p1, file, 59, 4, 1485);
			attr_dev(div2, "class", "chapter-header");
			add_location(div2, file, 57, 2, 1426);
			attr_dev(div3, "class", "container");
			add_location(div3, file, 56, 0, 1400);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheS5jYTU2Mjk4Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wbGF5LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGU+XG4uaW1hZ2UtZ2FsbGVyeSBmaWd1cmUgaW1nIHtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5cdGxldCBwaG90b3NPbmUgPSBbXG5cdFx0eyBzcmM6ICdpbWFnZXMvYWFhLmpwZycsIGFsdDogJ3doYXRldmVyJyB9LFxuXHRcdHsgc3JjOiAnaW1hZ2VzL2JiYi5qcGcnLCBhbHQ6ICd5dXAnIH0sXG5cdFx0eyBzcmM6ICdpbWFnZXMvY2NjLmpwZycsIGFsdDogJ25ldycgfVxuXHRdO1xuICBsZXQgcGhvdG9zVHdvID0gW1xuICAgIHsgc3JjOiAnaW1hZ2VzL2RkZC5qcGcnLCBhbHQ6ICdzdHVmZicgfSxcbiAgICB7IHNyYzogJ2ltYWdlcy9lZWUuanBnJywgYWx0OiAnc2hpdCcgfVxuXHRdO1xuXHRsZXQgY2hhcHRlck9uZSA9ICdBw690IEJlbmhhZGRvdSc7XG5cdGxldCBjaGFwdGVyVHdvID0gXHQnRXJnIENoZWJiaSc7XG5cdC8vIGxldCBjaGFwdGVycyA9IFtcblx0Ly8gXHR7IG9uZTogJ0HDr3QgQmVuaGFkZG91JyB9LFxuXHQvLyBcdHsgdHdvOiAnRXJnIENoZWJiaSd9XG5cdC8vIF1cblx0Ly8gaW1wb3J0IHRlc3QgZnJvbSAndGVzdC5qcyc7XG5cblx0aW1wb3J0IENoYXB0ZXJIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFwdGVySGVhZGVyLnN2ZWx0ZSc7XG48L3NjcmlwdD5cblxuPCEtLSA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG5cdDxwPnt0ZXN0fTwvcD5cbjwvZGl2PiAtLT5cblxuXG5cblxueyNlYWNoIHBob3Rvc09uZSBhcyBwaG90bywgaX1cblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBpbWFnZS1nYWxsZXJ5XCI+XG5cdFx0XHQ8ZmlndXJlPjxpbWcgc3JjPXtwaG90by5zcmN9IGFsdD17cGhvdG8uYWx0fT48L2ZpZ3VyZT5cblx0PC9kaXY+XG57L2VhY2h9XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImNoYXB0ZXItaGVhZGVyXCI+XG4gICAgPGgyPntjaGFwdGVyT25lfTwvaDI+XG4gICAgPHA+KiAqICo8L3A+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuXG57I2VhY2ggcGhvdG9zVHdvIGFzIHBob3RvLCBpfVxuXHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyIGltYWdlLWdhbGxlcnlcIj5cblx0XHRcdDxmaWd1cmU+PGltZyBzcmM9e3Bob3RvLnNyY30gYWx0PXtwaG90by5hbHR9PjwvZmlndXJlPlxuXHQ8L2Rpdj5cbnsvZWFjaH1cblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICA8ZGl2IGNsYXNzPVwiY2hhcHRlci1oZWFkZXJcIj5cbiAgICA8aDI+e2NoYXB0ZXJUd299PC9oMj5cbiAgICA8cD4qICogKjwvcD5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXFDcUIsR0FBSyxJQUFDLEdBQUc7a0RBQU8sR0FBSyxJQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBZXpCLEdBQUssSUFBQyxHQUFHO2tEQUFPLEdBQUssSUFBQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FqQnZDLEdBQVM7Ozs7a0NBQWQsTUFBSTs7OztnQ0FlQyxHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7OzRCQVBHLEdBQVU7Ozs7Ozs7Ozs7Ozs7OzRCQWVWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FmVixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZDQWVWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBdkJaLEdBQVM7Ozs7aUNBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixNQUFJOzs7OytCQWVDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBakRELFNBQVM7SUFDVixHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLFVBQVU7SUFDdEMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxLQUFLO0lBQ2pDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsS0FBSzs7O0tBRS9CLFNBQVM7SUFDVCxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLE9BQU87SUFDbkMsR0FBRyxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxNQUFNOzs7S0FFbkMsVUFBVSxHQUFHLGVBQWU7S0FDNUIsVUFBVSxHQUFJLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
