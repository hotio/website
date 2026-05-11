---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag32683" onclick="CopyToClipboard('tag32683');return false;" class="tag-decoration">nightly</div><div id="tag24543" onclick="CopyToClipboard('tag24543');return false;" class="tag-decoration">nightly-6242c02</div><div id="tag11169" onclick="CopyToClipboard('tag11169');return false;" class="tag-decoration">nightly-d6fdf16efdfc29fd22543ba74c8aad6f2d06ee59</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/6242c02d6df8bba2c89c7ddde42c8542ea79685c" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25700672722" target="_blank">2026-05-11 22:19:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14663" onclick="CopyToClipboard('tag14663');return false;" class="tag-decoration">release</div><div id="tag1179" onclick="CopyToClipboard('tag1179');return false;" class="tag-decoration">release-b710d58</div><div id="tag8755" onclick="CopyToClipboard('tag8755');return false;" class="tag-decoration">release-0.15.2</div><div id="tag10792" onclick="CopyToClipboard('tag10792');return false;" class="tag-decoration">release-v0</div><div id="tag2297" onclick="CopyToClipboard('tag2297');return false;" class="tag-decoration">release-v0.15</div><div id="tag18071" onclick="CopyToClipboard('tag18071');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/b710d584351ffe6af0e9fb798d9233aba7d436e2" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25700674499" target="_blank">2026-05-11 22:19:37</a></td></tr>
<tr><td><div id="tag11279" onclick="CopyToClipboard('tag11279');return false;" class="tag-decoration">testing</div><div id="tag7897" onclick="CopyToClipboard('tag7897');return false;" class="tag-decoration">testing-2b37124</div><div id="tag12932" onclick="CopyToClipboard('tag12932');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag18087" onclick="CopyToClipboard('tag18087');return false;" class="tag-decoration">testing-v0</div><div id="tag2709" onclick="CopyToClipboard('tag2709');return false;" class="tag-decoration">testing-v0.15</div><div id="tag8824" onclick="CopyToClipboard('tag8824');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/2b371249ac7674560d1d7f87d1f18baebf34b84f" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/25664541013" target="_blank">2026-05-11 10:25:18</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
