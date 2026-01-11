---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag699" onclick="CopyToClipboard('tag699');return false;" class="tag-decoration">release</div><div id="tag11691" onclick="CopyToClipboard('tag11691');return false;" class="tag-decoration">release-0.24.821</div><div id="tag8203" onclick="CopyToClipboard('tag8203');return false;" class="tag-decoration">release-17d6d99</div><div id="tag3101" onclick="CopyToClipboard('tag3101');return false;" class="tag-decoration">release-v0</div><div id="tag31506" onclick="CopyToClipboard('tag31506');return false;" class="tag-decoration">release-v0.24</div><div id="tag16745" onclick="CopyToClipboard('tag16745');return false;" class="tag-decoration">release-v0.24.821</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/17d6d9988fcae2dd82eb52edb44b2ec3565c21b2" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20895139934" target="_blank">2026-01-11 12:28:47</a></td></tr>
<tr><td><div id="tag24639" onclick="CopyToClipboard('tag24639');return false;" class="tag-decoration">testing</div><div id="tag5720" onclick="CopyToClipboard('tag5720');return false;" class="tag-decoration">testing-0.24.821</div><div id="tag29688" onclick="CopyToClipboard('tag29688');return false;" class="tag-decoration">testing-83ab772</div><div id="tag28404" onclick="CopyToClipboard('tag28404');return false;" class="tag-decoration">testing-v0</div><div id="tag9711" onclick="CopyToClipboard('tag9711');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18985" onclick="CopyToClipboard('tag18985');return false;" class="tag-decoration">testing-v0.24.821</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/83ab772fdc83011695aa4c91ddfd455498b98325" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20895140037" target="_blank">2026-01-11 12:28:48</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
