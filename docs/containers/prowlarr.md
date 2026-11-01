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
<tr><td><div id="tag25363" onclick="CopyToClipboard('tag25363');return false;" class="tag-decoration">nightly</div><div id="tag28898" onclick="CopyToClipboard('tag28898');return false;" class="tag-decoration">nightly-afdef00</div><div id="tag7897" onclick="CopyToClipboard('tag7897');return false;" class="tag-decoration">nightly-3.0.0.5736</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/afdef0035966babcefc8aabbccc9fa0e51f09b8a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/41344363528" target="_blank">2026-11-01 19:57:37</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16626" onclick="CopyToClipboard('tag16626');return false;" class="tag-decoration">release</div><div id="tag1088" onclick="CopyToClipboard('tag1088');return false;" class="tag-decoration">release-18b23ac</div><div id="tag11692" onclick="CopyToClipboard('tag11692');return false;" class="tag-decoration">release-2.7.0.5723</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/18b23ac08b5657de4e8dc42ec2780c7245663184" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40565632008" target="_blank">2026-10-27 19:03:26</a></td></tr>
<tr><td><div id="tag11870" onclick="CopyToClipboard('tag11870');return false;" class="tag-decoration">testing</div><div id="tag24388" onclick="CopyToClipboard('tag24388');return false;" class="tag-decoration">testing-8efb803</div><div id="tag19542" onclick="CopyToClipboard('tag19542');return false;" class="tag-decoration">testing-2.7.0.5723</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/8efb8035c23c33668d375515a805c8f3e0c5c68a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/40565648051" target="_blank">2026-10-27 19:03:28</a></td></tr>
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
