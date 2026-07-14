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
<tr><td><div id="tag29980" onclick="CopyToClipboard('tag29980');return false;" class="tag-decoration">nightly</div><div id="tag5438" onclick="CopyToClipboard('tag5438');return false;" class="tag-decoration">nightly-19957ba</div><div id="tag20010" onclick="CopyToClipboard('tag20010');return false;" class="tag-decoration">nightly-2.5.1.5469</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/19957ba61822acceb3648894ad36b7f012805edf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29322910638" target="_blank">2026-07-14 09:45:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14322" onclick="CopyToClipboard('tag14322');return false;" class="tag-decoration">release</div><div id="tag1244" onclick="CopyToClipboard('tag1244');return false;" class="tag-decoration">release-dab413b</div><div id="tag11774" onclick="CopyToClipboard('tag11774');return false;" class="tag-decoration">release-2.4.0.5397</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/dab413bb6989c0198ab669084e6230e141f95359" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29360222840" target="_blank">2026-07-14 19:01:32</a></td></tr>
<tr><td><div id="tag13258" onclick="CopyToClipboard('tag13258');return false;" class="tag-decoration">testing</div><div id="tag4785" onclick="CopyToClipboard('tag4785');return false;" class="tag-decoration">testing-dc6e624</div><div id="tag26287" onclick="CopyToClipboard('tag26287');return false;" class="tag-decoration">testing-2.5.1.5464</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/dc6e624bd52a24294ec44a856e3fcd0687aa82b5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/29360223572" target="_blank">2026-07-14 19:01:32</a></td></tr>
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
