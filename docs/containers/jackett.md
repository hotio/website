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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24076" onclick="CopyToClipboard('tag24076');return false;" class="tag-decoration">release</div><div id="tag910" onclick="CopyToClipboard('tag910');return false;" class="tag-decoration">release-a74d450</div><div id="tag26105" onclick="CopyToClipboard('tag26105');return false;" class="tag-decoration">release-0.24.846</div><div id="tag28110" onclick="CopyToClipboard('tag28110');return false;" class="tag-decoration">release-v0</div><div id="tag31929" onclick="CopyToClipboard('tag31929');return false;" class="tag-decoration">release-v0.24</div><div id="tag17430" onclick="CopyToClipboard('tag17430');return false;" class="tag-decoration">release-v0.24.846</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/a74d4502b123a225162ec2cc3cd070c8b000d7b7" target="_blank">Version update: 0.24.834 => 0.24.846</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20985174662" target="_blank">2026-01-14 06:48:57</a></td></tr>
<tr><td><div id="tag14399" onclick="CopyToClipboard('tag14399');return false;" class="tag-decoration">testing</div><div id="tag19682" onclick="CopyToClipboard('tag19682');return false;" class="tag-decoration">testing-425aae2</div><div id="tag2395" onclick="CopyToClipboard('tag2395');return false;" class="tag-decoration">testing-0.24.846</div><div id="tag25436" onclick="CopyToClipboard('tag25436');return false;" class="tag-decoration">testing-v0</div><div id="tag2897" onclick="CopyToClipboard('tag2897');return false;" class="tag-decoration">testing-v0.24</div><div id="tag8871" onclick="CopyToClipboard('tag8871');return false;" class="tag-decoration">testing-v0.24.846</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/425aae2b0348633449ea4d93431495dfa7bfbd05" target="_blank">Version update: 0.24.834 => 0.24.846</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20985175230" target="_blank">2026-01-14 06:48:59</a></td></tr>
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
