---
hide:
  - toc
title: hotio/overseerr
status: deprecated
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/overseerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/overseerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sct/overseerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14673" onclick="CopyToClipboard('tag14673');return false;" class="tag-decoration">nightly</div><div id="tag31768" onclick="CopyToClipboard('tag31768');return false;" class="tag-decoration">nightly-5ef098f6d844dde6d5d9076c8814e9a34bd73451</div><div id="tag28801" onclick="CopyToClipboard('tag28801');return false;" class="tag-decoration">nightly-d759fb0</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/overseerr/commit/d759fb082e2153eca36d1c13fcabc3073c18bee3" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20850338910" target="_blank">2026-01-09 11:22:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13851" onclick="CopyToClipboard('tag13851');return false;" class="tag-decoration">release</div><div id="tag24338" onclick="CopyToClipboard('tag24338');return false;" class="tag-decoration">release-1.34.0</div><div id="tag20197" onclick="CopyToClipboard('tag20197');return false;" class="tag-decoration">release-66d9c1f</div><div id="tag28656" onclick="CopyToClipboard('tag28656');return false;" class="tag-decoration">release-v1</div><div id="tag19183" onclick="CopyToClipboard('tag19183');return false;" class="tag-decoration">release-v1.34</div><div id="tag6364" onclick="CopyToClipboard('tag6364');return false;" class="tag-decoration">release-v1.34.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/overseerr/commit/66d9c1f3ad03b4cdb6b28a9eee86266b7891696c" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20850339358" target="_blank">2026-01-09 11:23:01</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="overseerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/overseerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      overseerr:
        container_name: overseerr
        image: ghcr.io/hotio/overseerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
