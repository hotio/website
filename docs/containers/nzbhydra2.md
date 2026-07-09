---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27511" onclick="CopyToClipboard('tag27511');return false;" class="tag-decoration">release</div><div id="tag27636" onclick="CopyToClipboard('tag27636');return false;" class="tag-decoration">release-2394258</div><div id="tag27643" onclick="CopyToClipboard('tag27643');return false;" class="tag-decoration">release-8.8.5</div><div id="tag32067" onclick="CopyToClipboard('tag32067');return false;" class="tag-decoration">release-v8</div><div id="tag30224" onclick="CopyToClipboard('tag30224');return false;" class="tag-decoration">release-v8.8</div><div id="tag4797" onclick="CopyToClipboard('tag4797');return false;" class="tag-decoration">release-v8.8.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/2394258b116391e3125ad511dedea17b788bbf6e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28975688899" target="_blank">2026-07-08 21:05:33</a></td></tr>
<tr><td><div id="tag27754" onclick="CopyToClipboard('tag27754');return false;" class="tag-decoration">testing</div><div id="tag25387" onclick="CopyToClipboard('tag25387');return false;" class="tag-decoration">testing-7968217</div><div id="tag29918" onclick="CopyToClipboard('tag29918');return false;" class="tag-decoration">testing-8.8.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/79682174616d035b8b794cf13822d664aa73c3e4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28990492696" target="_blank">2026-07-09 02:48:08</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
