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
<tr><td><div id="tag18010" onclick="CopyToClipboard('tag18010');return false;" class="tag-decoration">nightly</div><div id="tag4440" onclick="CopyToClipboard('tag4440');return false;" class="tag-decoration">nightly-8eae0c5</div><div id="tag18425" onclick="CopyToClipboard('tag18425');return false;" class="tag-decoration">nightly-2.6.3.5605</div></td><td>nightly</td><td><a href="https://github.com/hotio/prowlarr/commit/8eae0c5b84f0db9a9ec58fd0a71d8a0ba522b061" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33593921832" target="_blank">2026-09-02 05:14:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2589" onclick="CopyToClipboard('tag2589');return false;" class="tag-decoration">release</div><div id="tag2514" onclick="CopyToClipboard('tag2514');return false;" class="tag-decoration">release-d5cc54d</div><div id="tag8316" onclick="CopyToClipboard('tag8316');return false;" class="tag-decoration">release-2.5.2.5491</div></td><td>master</td><td><a href="https://github.com/hotio/prowlarr/commit/d5cc54dcc429c26144a2b36381bae840f58cfcf9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33507113204" target="_blank">2026-09-01 12:20:07</a></td></tr>
<tr><td><div id="tag12919" onclick="CopyToClipboard('tag12919');return false;" class="tag-decoration">testing</div><div id="tag17940" onclick="CopyToClipboard('tag17940');return false;" class="tag-decoration">testing-23fbaa5</div><div id="tag20464" onclick="CopyToClipboard('tag20464');return false;" class="tag-decoration">testing-2.6.3.5592</div></td><td>develop</td><td><a href="https://github.com/hotio/prowlarr/commit/23fbaa517ca724a1b89e4200e44a0624fd83999c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/prowlarr/actions/runs/33593918380" target="_blank">2026-09-02 05:14:45</a></td></tr>
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
