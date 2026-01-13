---
hide:
  - toc
title: hotio/prowlarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/prowlarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/prowlarr/prowlarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag3017" onclick="CopyToClipboard('tag3017');return false;" class="tag-decoration">nightly</div><div id="tag24851" onclick="CopyToClipboard('tag24851');return false;" class="tag-decoration">nightly-0fd7be5</div><div id="tag6858" onclick="CopyToClipboard('tag6858');return false;" class="tag-decoration">nightly-2.3.2.5251</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/0fd7be59469602a527feca7749618e0e4e5e9882" target="_blank">Version update: 2.3.2.5251 => 2.3.2.5251</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20950115518" target="_blank">2026-01-13 08:37:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32555" onclick="CopyToClipboard('tag32555');return false;" class="tag-decoration">release</div><div id="tag32046" onclick="CopyToClipboard('tag32046');return false;" class="tag-decoration">release-a535d53</div><div id="tag5629" onclick="CopyToClipboard('tag5629');return false;" class="tag-decoration">release-2.3.0.5236</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/a535d53e6c5d225b23b359a43947e7ca99d4410e" target="_blank">Version update: 2.3.0.5236 => 2.3.0.5236</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20950116276" target="_blank">2026-01-13 08:37:38</a></td></tr>
<tr><td><div id="tag1409" onclick="CopyToClipboard('tag1409');return false;" class="tag-decoration">testing</div><div id="tag31408" onclick="CopyToClipboard('tag31408');return false;" class="tag-decoration">testing-70da064</div><div id="tag14113" onclick="CopyToClipboard('tag14113');return false;" class="tag-decoration">testing-2.3.2.5245</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/70da06489ac7b7859fa1d8deb3ee43bef8d2fad8" target="_blank">Version update: 2.3.2.5245 => 2.3.2.5245</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/20950116831" target="_blank">2026-01-13 08:37:39</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="prowlarr" \
        -p 9696:9696 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9696/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/prowlarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      prowlarr:
        container_name: prowlarr
        image: ghcr.io/hotio/prowlarr
        ports:
          - "9696:9696"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9696/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
