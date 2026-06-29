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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21360" onclick="CopyToClipboard('tag21360');return false;" class="tag-decoration">release</div><div id="tag19074" onclick="CopyToClipboard('tag19074');return false;" class="tag-decoration">release-27ba0cd</div><div id="tag20584" onclick="CopyToClipboard('tag20584');return false;" class="tag-decoration">release-8.8.4</div><div id="tag12216" onclick="CopyToClipboard('tag12216');return false;" class="tag-decoration">release-v8</div><div id="tag17594" onclick="CopyToClipboard('tag17594');return false;" class="tag-decoration">release-v8.8</div><div id="tag23429" onclick="CopyToClipboard('tag23429');return false;" class="tag-decoration">release-v8.8.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/27ba0cd7dca389c99870db588b6b4ea6c77c8fc2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28206525372" target="_blank">2026-06-25 23:16:46</a></td></tr>
<tr><td><div id="tag24165" onclick="CopyToClipboard('tag24165');return false;" class="tag-decoration">testing</div><div id="tag10758" onclick="CopyToClipboard('tag10758');return false;" class="tag-decoration">testing-ee27054</div><div id="tag28576" onclick="CopyToClipboard('tag28576');return false;" class="tag-decoration">testing-8.8.4</div><div id="tag18163" onclick="CopyToClipboard('tag18163');return false;" class="tag-decoration">testing-v8</div><div id="tag26715" onclick="CopyToClipboard('tag26715');return false;" class="tag-decoration">testing-v8.8</div><div id="tag9435" onclick="CopyToClipboard('tag9435');return false;" class="tag-decoration">testing-v8.8.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/ee27054f75b216e8ddc7193b053f2221bd98f014" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/28398698427" target="_blank">2026-06-29 19:54:38</a></td></tr>
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
