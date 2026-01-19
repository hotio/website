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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32419" onclick="CopyToClipboard('tag32419');return false;" class="tag-decoration">release</div><div id="tag17576" onclick="CopyToClipboard('tag17576');return false;" class="tag-decoration">release-e5fc622</div><div id="tag16131" onclick="CopyToClipboard('tag16131');return false;" class="tag-decoration">release-0.24.879</div><div id="tag15735" onclick="CopyToClipboard('tag15735');return false;" class="tag-decoration">release-v0</div><div id="tag6736" onclick="CopyToClipboard('tag6736');return false;" class="tag-decoration">release-v0.24</div><div id="tag7304" onclick="CopyToClipboard('tag7304');return false;" class="tag-decoration">release-v0.24.879</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e5fc62229634cdd979ae46178be78f15a4170117" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21113693911" target="_blank">2026-01-18 14:56:51</a></td></tr>
<tr><td><div id="tag10523" onclick="CopyToClipboard('tag10523');return false;" class="tag-decoration">testing</div><div id="tag17060" onclick="CopyToClipboard('tag17060');return false;" class="tag-decoration">testing-f5df6ef</div><div id="tag8365" onclick="CopyToClipboard('tag8365');return false;" class="tag-decoration">testing-0.24.879</div><div id="tag5685" onclick="CopyToClipboard('tag5685');return false;" class="tag-decoration">testing-v0</div><div id="tag24792" onclick="CopyToClipboard('tag24792');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8442" onclick="CopyToClipboard('tag8442');return false;" class="tag-decoration">testing-v0.24.879</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/f5df6ef70c64aee296128f57df462cfc7a792edf" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21124037102" target="_blank">2026-01-19 03:13:12</a></td></tr>
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
