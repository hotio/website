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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag641" onclick="CopyToClipboard('tag641');return false;" class="tag-decoration">release</div><div id="tag1709" onclick="CopyToClipboard('tag1709');return false;" class="tag-decoration">release-e4ce016</div><div id="tag8093" onclick="CopyToClipboard('tag8093');return false;" class="tag-decoration">release-8.8.1</div><div id="tag8559" onclick="CopyToClipboard('tag8559');return false;" class="tag-decoration">release-v8</div><div id="tag31913" onclick="CopyToClipboard('tag31913');return false;" class="tag-decoration">release-v8.8</div><div id="tag32313" onclick="CopyToClipboard('tag32313');return false;" class="tag-decoration">release-v8.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/e4ce016d3cf02da0e1f40783be24c3040448c125" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25701829328" target="_blank">2026-05-11 22:46:58</a></td></tr>
<tr><td><div id="tag27064" onclick="CopyToClipboard('tag27064');return false;" class="tag-decoration">testing</div><div id="tag19201" onclick="CopyToClipboard('tag19201');return false;" class="tag-decoration">testing-eea75da</div><div id="tag31771" onclick="CopyToClipboard('tag31771');return false;" class="tag-decoration">testing-8.8.1</div><div id="tag698" onclick="CopyToClipboard('tag698');return false;" class="tag-decoration">testing-v8</div><div id="tag6089" onclick="CopyToClipboard('tag6089');return false;" class="tag-decoration">testing-v8.8</div><div id="tag541" onclick="CopyToClipboard('tag541');return false;" class="tag-decoration">testing-v8.8.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/eea75daa0f1dccbf4378297c2fafc291dbb13d22" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/25714947924" target="_blank">2026-05-12 05:16:24</a></td></tr>
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
