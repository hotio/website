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
<tr><td><div id="tag8537" onclick="CopyToClipboard('tag8537');return false;" class="tag-decoration">nightly</div><div id="tag17101" onclick="CopyToClipboard('tag17101');return false;" class="tag-decoration">nightly-39f24b2</div><div id="tag26589" onclick="CopyToClipboard('tag26589');return false;" class="tag-decoration">nightly-2.4.0.5391</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/39f24b2311f1ebf7bdc279aa47c2a272d2c2fd7d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/26698243693" target="_blank">2026-05-30 23:52:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31498" onclick="CopyToClipboard('tag31498');return false;" class="tag-decoration">release</div><div id="tag24406" onclick="CopyToClipboard('tag24406');return false;" class="tag-decoration">release-fb533f1</div><div id="tag4131" onclick="CopyToClipboard('tag4131');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/fb533f116ce8fbef988623a61757c3f362b232af" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25986472604" target="_blank">2026-05-17 08:57:40</a></td></tr>
<tr><td><div id="tag5947" onclick="CopyToClipboard('tag5947');return false;" class="tag-decoration">testing</div><div id="tag21994" onclick="CopyToClipboard('tag21994');return false;" class="tag-decoration">testing-23aec2b</div><div id="tag9161" onclick="CopyToClipboard('tag9161');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/23aec2be5b2bea3929a108537317dbd27482106f" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25986472835" target="_blank">2026-05-17 08:57:41</a></td></tr>
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
