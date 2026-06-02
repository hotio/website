---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag9517" onclick="CopyToClipboard('tag9517');return false;" class="tag-decoration">nightly</div><div id="tag24641" onclick="CopyToClipboard('tag24641');return false;" class="tag-decoration">nightly-61c20c4</div><div id="tag14185" onclick="CopyToClipboard('tag14185');return false;" class="tag-decoration">nightly-73fcfd253fccac97917d54b12e01400e472be680</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/61c20c4a87ce25aeffff67a49c12f66ded4117c3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26810219656" target="_blank">2026-06-02 09:13:10</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21542" onclick="CopyToClipboard('tag21542');return false;" class="tag-decoration">release</div><div id="tag9105" onclick="CopyToClipboard('tag9105');return false;" class="tag-decoration">release-46c910f</div><div id="tag26931" onclick="CopyToClipboard('tag26931');return false;" class="tag-decoration">release-3.2.0</div><div id="tag13180" onclick="CopyToClipboard('tag13180');return false;" class="tag-decoration">release-v3</div><div id="tag17902" onclick="CopyToClipboard('tag17902');return false;" class="tag-decoration">release-v3.2</div><div id="tag24202" onclick="CopyToClipboard('tag24202');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/46c910fd420e717e3a4e1c267780898d4ba71835" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26363879226" target="_blank">2026-05-24 14:27:20</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
