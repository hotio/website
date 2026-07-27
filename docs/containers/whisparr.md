---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25916" onclick="CopyToClipboard('tag25916');return false;" class="tag-decoration">v2</div><div id="tag24671" onclick="CopyToClipboard('tag24671');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag8241" onclick="CopyToClipboard('tag8241');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag597" onclick="CopyToClipboard('tag597');return false;" class="tag-decoration">v2-v2</div><div id="tag26051" onclick="CopyToClipboard('tag26051');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7566" onclick="CopyToClipboard('tag7566');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag21623" onclick="CopyToClipboard('tag21623');return false;" class="tag-decoration">v2-develop</div><div id="tag13956" onclick="CopyToClipboard('tag13956');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag30026" onclick="CopyToClipboard('tag30026');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag16853" onclick="CopyToClipboard('tag16853');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5397" onclick="CopyToClipboard('tag5397');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag31652" onclick="CopyToClipboard('tag31652');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag26074" onclick="CopyToClipboard('tag26074');return false;" class="tag-decoration">v3</div><div id="tag2666" onclick="CopyToClipboard('tag2666');return false;" class="tag-decoration">v3-c811cfe</div><div id="tag14481" onclick="CopyToClipboard('tag14481');return false;" class="tag-decoration">v3-3.3.7-release.979</div><div id="tag7007" onclick="CopyToClipboard('tag7007');return false;" class="tag-decoration">v3-v3</div><div id="tag25718" onclick="CopyToClipboard('tag25718');return false;" class="tag-decoration">v3-v3.3</div><div id="tag24018" onclick="CopyToClipboard('tag24018');return false;" class="tag-decoration">v3-v3.3.7</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c811cfea2333ae674d6dbdee2e06e9cc986109b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30213554053" target="_blank">2026-07-26 17:54:00</a></td></tr>
<tr><td><div id="tag13558" onclick="CopyToClipboard('tag13558');return false;" class="tag-decoration">v3-develop</div><div id="tag17902" onclick="CopyToClipboard('tag17902');return false;" class="tag-decoration">v3-develop-b676014</div><div id="tag8418" onclick="CopyToClipboard('tag8418');return false;" class="tag-decoration">v3-develop-3.3.8-develop.981</div><div id="tag13270" onclick="CopyToClipboard('tag13270');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag14098" onclick="CopyToClipboard('tag14098');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag8628" onclick="CopyToClipboard('tag8628');return false;" class="tag-decoration">v3-develop-v3.3.8</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b676014486e64a544ba1ecc33762aba4646bccc2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/30309679863" target="_blank">2026-07-27 22:09:18</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
