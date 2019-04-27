<template>
	<div>
		<b-navbar>
			<b-navbar-nav>
				<b-nav-item :href="`/@${$route.params.account}`">All Transactions</b-nav-item>
				<b-nav-item :href="`/@${$route.params.account}/votes`">Votes</b-nav-item>
				<b-nav-item :href="`/@${$route.params.account}/transfers`">Transfers</b-nav-item>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>
