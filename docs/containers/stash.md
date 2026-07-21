---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag22987" onclick="CopyToClipboard('tag22987');return false;" class="tag-decoration">nightly</div><div id="tag5903" onclick="CopyToClipboard('tag5903');return false;" class="tag-decoration">nightly-6e2ba51</div><div id="tag11950" onclick="CopyToClipboard('tag11950');return false;" class="tag-decoration">nightly-634f567e3edbe9e4fd27939fcd8d7cea1e41a7ed</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/6e2ba51b9e4c1ced597d606740ac9a1672137826" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29821283793" target="_blank">2026-07-21 10:11:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24221" onclick="CopyToClipboard('tag24221');return false;" class="tag-decoration">release</div><div id="tag24217" onclick="CopyToClipboard('tag24217');return false;" class="tag-decoration">release-05c2875</div><div id="tag3050" onclick="CopyToClipboard('tag3050');return false;" class="tag-decoration">release-0.31.1</div><div id="tag1028" onclick="CopyToClipboard('tag1028');return false;" class="tag-decoration">release-v0</div><div id="tag16571" onclick="CopyToClipboard('tag16571');return false;" class="tag-decoration">release-v0.31</div><div id="tag27899" onclick="CopyToClipboard('tag27899');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/05c28758259acbb1a01221add72f0b320d74cdd7" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/stash/actions/runs/29855839650" target="_blank">2026-07-21 18:06:56</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
