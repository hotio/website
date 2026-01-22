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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28684" onclick="CopyToClipboard('tag28684');return false;" class="tag-decoration">release</div><div id="tag23623" onclick="CopyToClipboard('tag23623');return false;" class="tag-decoration">release-669abf2</div><div id="tag26100" onclick="CopyToClipboard('tag26100');return false;" class="tag-decoration">release-0.24.900</div><div id="tag15701" onclick="CopyToClipboard('tag15701');return false;" class="tag-decoration">release-v0</div><div id="tag9219" onclick="CopyToClipboard('tag9219');return false;" class="tag-decoration">release-v0.24</div><div id="tag15563" onclick="CopyToClipboard('tag15563');return false;" class="tag-decoration">release-v0.24.900</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/669abf24f07fafbc97976a569fa237ce54da5061" target="_blank">Upstream update: alpinevpn-2c8fbe3 => alpinevpn-6f109b5</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21237940384" target="_blank">2026-01-22 06:02:48</a></td></tr>
<tr><td><div id="tag20165" onclick="CopyToClipboard('tag20165');return false;" class="tag-decoration">testing</div><div id="tag2631" onclick="CopyToClipboard('tag2631');return false;" class="tag-decoration">testing-0f4ed34</div><div id="tag8732" onclick="CopyToClipboard('tag8732');return false;" class="tag-decoration">testing-0.24.900</div><div id="tag9421" onclick="CopyToClipboard('tag9421');return false;" class="tag-decoration">testing-v0</div><div id="tag375" onclick="CopyToClipboard('tag375');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9158" onclick="CopyToClipboard('tag9158');return false;" class="tag-decoration">testing-v0.24.900</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/0f4ed34b53f98a3e20547eb8224ddffe243df631" target="_blank">Upstream update: alpinevpn-6f109b5 => alpinevpn-489d5d6</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21243346383" target="_blank">2026-01-22 09:34:54</a></td></tr>
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
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
