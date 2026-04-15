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
<tr><td><div id="tag2448" onclick="CopyToClipboard('tag2448');return false;" class="tag-decoration">nightly</div><div id="tag15885" onclick="CopyToClipboard('tag15885');return false;" class="tag-decoration">nightly-da12feb</div><div id="tag7923" onclick="CopyToClipboard('tag7923');return false;" class="tag-decoration">nightly-26cd867a6a6acfed12c99fcdb14624f4c5661eeb</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/da12feb4c6a640ddf7219f90144eaf2ea752b0a2" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24483911631" target="_blank">2026-04-15 23:36:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24570" onclick="CopyToClipboard('tag24570');return false;" class="tag-decoration">release</div><div id="tag8241" onclick="CopyToClipboard('tag8241');return false;" class="tag-decoration">release-6194812</div><div id="tag10804" onclick="CopyToClipboard('tag10804');return false;" class="tag-decoration">release-0.31.1</div><div id="tag11495" onclick="CopyToClipboard('tag11495');return false;" class="tag-decoration">release-v0</div><div id="tag16008" onclick="CopyToClipboard('tag16008');return false;" class="tag-decoration">release-v0.31</div><div id="tag8913" onclick="CopyToClipboard('tag8913');return false;" class="tag-decoration">release-v0.31.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/619481210cb7e2641f9db1d72dfead97366e2b85" target="_blank">Upstream update: noblevpn-cba64e8 => noblevpn-441eaee</a></td><td><a href="https://github.com/hotio/stash/actions/runs/24483912488" target="_blank">2026-04-15 23:36:51</a></td></tr>
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
