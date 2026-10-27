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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20349" onclick="CopyToClipboard('tag20349');return false;" class="tag-decoration">release</div><div id="tag16890" onclick="CopyToClipboard('tag16890');return false;" class="tag-decoration">release-4bb6b90</div><div id="tag28918" onclick="CopyToClipboard('tag28918');return false;" class="tag-decoration">release-9.1.1</div><div id="tag28076" onclick="CopyToClipboard('tag28076');return false;" class="tag-decoration">release-v9</div><div id="tag7920" onclick="CopyToClipboard('tag7920');return false;" class="tag-decoration">release-v9.1</div><div id="tag23000" onclick="CopyToClipboard('tag23000');return false;" class="tag-decoration">release-v9.1.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4bb6b908b9e6eab92169f347f891b721611ad363" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40516640039" target="_blank">2026-10-27 13:57:18</a></td></tr>
<tr><td><div id="tag16151" onclick="CopyToClipboard('tag16151');return false;" class="tag-decoration">testing</div><div id="tag21728" onclick="CopyToClipboard('tag21728');return false;" class="tag-decoration">testing-fdaaf6f</div><div id="tag17684" onclick="CopyToClipboard('tag17684');return false;" class="tag-decoration">testing-9.1.1</div><div id="tag18247" onclick="CopyToClipboard('tag18247');return false;" class="tag-decoration">testing-v9</div><div id="tag24978" onclick="CopyToClipboard('tag24978');return false;" class="tag-decoration">testing-v9.1</div><div id="tag30154" onclick="CopyToClipboard('tag30154');return false;" class="tag-decoration">testing-v9.1.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/fdaaf6fc973c2abf145ec7fb5b6c5892e2188a3f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/40516638252" target="_blank">2026-10-27 13:57:17</a></td></tr>
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
