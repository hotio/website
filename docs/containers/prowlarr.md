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
<tr><td><div id="tag7439" onclick="CopyToClipboard('tag7439');return false;" class="tag-decoration">nightly</div><div id="tag16212" onclick="CopyToClipboard('tag16212');return false;" class="tag-decoration">nightly-ee8cbcc</div><div id="tag28727" onclick="CopyToClipboard('tag28727');return false;" class="tag-decoration">nightly-2.3.7.5365</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/ee8cbcc5a204e856c7e99d6288da497a4fbac305" target="_blank">Version update: 2.3.6.5351 => 2.3.7.5365</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25252043929" target="_blank">2026-05-02 12:36:07</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16226" onclick="CopyToClipboard('tag16226');return false;" class="tag-decoration">release</div><div id="tag20476" onclick="CopyToClipboard('tag20476');return false;" class="tag-decoration">release-12415a5</div><div id="tag28894" onclick="CopyToClipboard('tag28894');return false;" class="tag-decoration">release-2.3.5.5327</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/12415a53082cf08e0133ae568d6ceaeab0b2af15" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/24552132912" target="_blank">2026-04-17 06:54:08</a></td></tr>
<tr><td><div id="tag1099" onclick="CopyToClipboard('tag1099');return false;" class="tag-decoration">testing</div><div id="tag17167" onclick="CopyToClipboard('tag17167');return false;" class="tag-decoration">testing-dedb8fa</div><div id="tag4025" onclick="CopyToClipboard('tag4025');return false;" class="tag-decoration">testing-2.3.7.5365</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/dedb8fa12c31d9a49c6d5acdd4b1c3c5468fa2e8" target="_blank">Version update: 2.3.6.5351 => 2.3.7.5365</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/25281835745" target="_blank">2026-05-03 14:30:02</a></td></tr>
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
