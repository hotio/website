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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30785" onclick="CopyToClipboard('tag30785');return false;" class="tag-decoration">release</div><div id="tag32155" onclick="CopyToClipboard('tag32155');return false;" class="tag-decoration">release-ee033e6</div><div id="tag23022" onclick="CopyToClipboard('tag23022');return false;" class="tag-decoration">release-8.9.0</div><div id="tag12910" onclick="CopyToClipboard('tag12910');return false;" class="tag-decoration">release-v8</div><div id="tag9969" onclick="CopyToClipboard('tag9969');return false;" class="tag-decoration">release-v8.9</div><div id="tag24076" onclick="CopyToClipboard('tag24076');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ee033e615321f3857b4913df29dd88cecfe95e12" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29779131541" target="_blank">2026-07-20 21:10:23</a></td></tr>
<tr><td><div id="tag32677" onclick="CopyToClipboard('tag32677');return false;" class="tag-decoration">testing</div><div id="tag21513" onclick="CopyToClipboard('tag21513');return false;" class="tag-decoration">testing-05c24a5</div><div id="tag23506" onclick="CopyToClipboard('tag23506');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag9163" onclick="CopyToClipboard('tag9163');return false;" class="tag-decoration">testing-v8</div><div id="tag31154" onclick="CopyToClipboard('tag31154');return false;" class="tag-decoration">testing-v8.9</div><div id="tag14905" onclick="CopyToClipboard('tag14905');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/05c24a508ef9aded7de3b0b382636e0ef3a1ed6b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/29779120441" target="_blank">2026-07-20 21:10:12</a></td></tr>
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
